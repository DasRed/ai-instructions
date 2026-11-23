#!/usr/bin/env node
/**
 * Google Search Console from the command line, authenticated with the service account in secrets/.
 * The service account must be a user of the property (read: restricted, sitemaps: full).
 * Creating a property needs the Site Verification API enabled in the service account's Google Cloud project.
 *
 *   node tools/search-console.mjs sites
 *   node tools/search-console.mjs sitemaps <site>
 *   node tools/search-console.mjs submit-sitemap <site> <sitemap-url>
 *   node tools/search-console.mjs delete-sitemap <site> <sitemap-url>
 *   node tools/search-console.mjs query <site> <start YYYY-MM-DD> <end YYYY-MM-DD> [dimension=query] [limit=25]
 *   node tools/search-console.mjs inspect <site> <url>
 *   node tools/search-console.mjs raw <METHOD> <path below webmasters/v3 or full URL> [json body]
 *
 * Create a domain property (in this order):
 *   node tools/search-console.mjs verify-token <domain>          TXT value for the root of the domain
 *   node tools/search-console.mjs verify <domain>                after the TXT record is visible in DNS
 *   node tools/search-console.mjs add-site sc-domain:<domain>
 *   node tools/search-console.mjs add-owner <domain> <email>     Google account that becomes owner
 *   node tools/search-console.mjs verified                       domains verified by the service account
 *
 * <site> is the property as listed by `sites`, e.g. sc-domain:marco-starker.de.
 * The key file can be overridden with GOOGLE_SERVICE_ACCOUNT_KEY.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const KEY_FILE                = process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? path.join(import.meta.dirname, '..', 'secrets', 'google-play-console-dasred-android-apps.json');
const API                     = 'https://searchconsole.googleapis.com/webmasters/v3';
const SCOPE                   = 'https://www.googleapis.com/auth/webmasters';
const SITE_VERIFICATION       = 'https://www.googleapis.com/siteVerification/v1';
const SCOPE_SITE_VERIFICATION = 'https://www.googleapis.com/auth/siteverification';

function scopeFor(method, url) {
    if (url.startsWith(SITE_VERIFICATION) === true) {
        return SCOPE_SITE_VERIFICATION;
    }

    return method === 'GET' || url.includes('searchAnalytics') || url.includes('urlInspection') ? `${SCOPE}.readonly` : SCOPE;
}

async function accessToken(scope) {
    const key      = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
    const encode   = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
    const now      = Math.floor(Date.now() / 1000);
    const unsigned = `${encode({alg: 'RS256', typ: 'JWT'})}.${encode({
        aud:   'https://oauth2.googleapis.com/token',
        exp:   now + 3600,
        iat:   now,
        iss:   key.client_email,
        scope: scope,
    })}`;
    const jwt      = `${unsigned}.${crypto.sign('RSA-SHA256', Buffer.from(unsigned), key.private_key).toString('base64url')}`;
    const response = await fetch('https://oauth2.googleapis.com/token', {
        body:    new URLSearchParams({assertion: jwt, grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer'}),
        method:  'POST',
    });
    const data     = await response.json();
    if (data.access_token === undefined) {
        throw new Error(`Token request failed: ${JSON.stringify(data)}`);
    }

    return data.access_token;
}

async function request(method, url, body) {
    const token    = await accessToken(scopeFor(method, url));
    const response = await fetch(url.startsWith('http') ? url : `${API}/${url}`, {
        body:    body === undefined ? undefined : JSON.stringify(body),
        headers: {'authorization': `Bearer ${token}`, 'content-type': 'application/json'},
        method:  method,
    });
    const text     = await response.text();
    if (response.ok === false) {
        throw new Error(`${method} ${url} → ${response.status}: ${text}`);
    }

    return text === '' ? {} : JSON.parse(text);
}

const site        = (value) => encodeURIComponent(value);
const domainSite  = (domain) => ({identifier: domain, type: 'INET_DOMAIN'});
const webResource = (domain) => `${SITE_VERIFICATION}/webResource/${site(`dns://${domain}`)}`;

async function addOwner(domain, email) {
    const resource = await request('GET', webResource(domain));
    if (resource.owners.includes(email) === true) {
        return resource;
    }

    return request('PUT', webResource(domain), {...resource, owners: [...resource.owners, email]});
}

const commands = {
    'add-owner':      (domain, email) => addOwner(domain, email),
    'add-site':       (property) => request('PUT', `sites/${site(property)}`),
    'delete-sitemap': (property, sitemap) => request('DELETE', `sites/${site(property)}/sitemaps/${site(sitemap)}`),
    'inspect':        (property, url) => request('POST', 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {inspectionUrl: url, languageCode: 'de', siteUrl: property}),
    'query':          (property, startDate, endDate, dimension = 'query', limit = '25') => request('POST', `sites/${site(property)}/searchAnalytics/query`, {dimensions: [dimension], endDate, rowLimit: Number(limit), startDate}),
    'raw':            (method, url, body) => request(method.toUpperCase(), url, body === undefined ? undefined : JSON.parse(body)),
    'sitemaps':       (property) => request('GET', `sites/${site(property)}/sitemaps`),
    'sites':          () => request('GET', 'sites'),
    'submit-sitemap': (property, sitemap) => request('PUT', `sites/${site(property)}/sitemaps/${site(sitemap)}`),
    'verified':       () => request('GET', `${SITE_VERIFICATION}/webResource`),
    'verify':         (domain) => request('POST', `${SITE_VERIFICATION}/webResource?verificationMethod=DNS_TXT`, {site: domainSite(domain)}),
    'verify-token':   (domain) => request('POST', `${SITE_VERIFICATION}/token`, {site: domainSite(domain), verificationMethod: 'DNS_TXT'}),
};

const [command, ...args] = process.argv.slice(2);
if (commands[command] === undefined) {
    console.error(`Usage: node search-console.mjs <${Object.keys(commands).join('|')}> …`);
    process.exit(1);
}

try {
    console.log(JSON.stringify(await commands[command](...args), null, 4));
}
catch (error) {
    console.error(error.message);
    process.exit(1);
}
