#! /usr/bin/bash

cat package.json \
| grep -v '"version":' \
| sed "s/\(\"name\": \"\@element-plus\/colors\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > package.json.bak

cat package.json.bak > package.json
rm package.json.bak
npm publish --registry ${REGISTRY}
