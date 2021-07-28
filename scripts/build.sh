#! /usr/bin/bash

echo "Start building ..."

echo "Using rollup to build components"

yarn build:js

echo "Removing unnecessary test typings"
rm -rf dist/dist/test


echo "Adding index.js"
cat > dist/index.js <<EOF
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/index.cjs.prod.js')
} else {
  module.exports = require('./dist/index.cjs.js')
}
EOF

echo "Build finished"
