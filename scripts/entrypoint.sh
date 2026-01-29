#!/bin/sh
set -e

if [ -n "$GEMINI_API_KEY" ]; then
  echo "Generating resume data..."
  npm run update-resume
else
  echo "GEMINI_API_KEY not set. Skipping resume generation."
fi

exec "$@"
