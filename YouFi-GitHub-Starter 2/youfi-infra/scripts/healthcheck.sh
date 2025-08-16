#!/usr/bin/env bash
set -e
URL="${1:-https://youfi.finance/health}"
code=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
if [ "$code" != "200" ]; then
  echo "Healthcheck failed ($code)"; exit 1
fi
echo "OK"
