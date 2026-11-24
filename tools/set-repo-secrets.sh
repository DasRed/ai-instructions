#!/usr/bin/env bash
#
# Sets the GitHub Actions secrets that are missing in the given repositories.
# Values come from secrets/.env and are piped to gh, they are never printed.
#
# Usage: tools/set-repo-secrets.sh [-o owner] [-s NAME,NAME] repo [repo ...]
#
#   -o owner   repository owner, default DasRed (a repo given as owner/name keeps its owner)
#   -s names   comma separated secret names, default all secrets the workflows of DasRed/github-workflows need:
#              DOCKHAND_HOST, DOCKHAND_TOKEN, HOMEASSISTANT_WEBHOOK_URL, WEBSITE_RELEASE_TOKEN
#
# Example: tools/set-repo-secrets.sh esbuild-plugin-clear esbuild-plugin-copy esbuild-plugin-time

set -euo pipefail

env_file="$(cd "$(dirname "$0")/.." && pwd)/secrets/.env"
owner=DasRed
secrets=DOCKHAND_HOST,DOCKHAND_TOKEN,HOMEASSISTANT_WEBHOOK_URL,WEBSITE_RELEASE_TOKEN

usage() {
    sed -n '3,13p' "$0" | sed 's/^# \{0,1\}//'
}

while getopts 'o:s:h' option; do
    case "$option" in
        o) owner="$OPTARG" ;;
        s) secrets="$OPTARG" ;;
        h) usage; exit 0 ;;
        *) usage; exit 1 ;;
    esac
done
shift $((OPTIND - 1))

if [ $# -eq 0 ]; then
    usage
    exit 1
fi

if ! command -v gh > /dev/null; then
    echo "gh is not installed" >&2
    exit 1
fi

if [ ! -f "$env_file" ]; then
    echo "$env_file not found" >&2
    exit 1
fi

IFS=',' read -r -a names <<< "$secrets"

for repo in "$@"; do
    [[ "$repo" == */* ]] || repo="$owner/$repo"

    if ! existing=$(gh secret list --repo "$repo" --json name --jq '.[].name'); then
        echo "$repo: secrets could not be read, skipped" >&2
        continue
    fi

    for name in "${names[@]}"; do
        if grep -qx "$name" <<< "$existing"; then
            echo "$repo: $name exists"
            continue
        fi

        value=$(grep -E "^${name}=" "$env_file" | cut -d= -f2- | tr -d '\r\n' || true)
        if [ -z "$value" ]; then
            echo "$repo: $name missing in secrets/.env" >&2
            continue
        fi

        printf '%s' "$value" | gh secret set "$name" --repo "$repo"
        echo "$repo: $name set"
    done
done

unset value
