# utf8-bin

A fast UTF-8 encoding and decoding.

[![npm](https://img.shields.io/npm/v/utf8-bin.svg)](https://www.npmjs.com/package/utf8-bin)
[![Build Status](https://travis-ci.org/AlexMasterov/utf8-bin.js.svg)](https://travis-ci.org/AlexMasterov/utf8-bin.js)
[![Coverage Status](https://coveralls.io/repos/github/AlexMasterov/utf8-bin.js/badge.svg?branch=master)](https://coveralls.io/github/AlexMasterov/utf8-bin.js?branch=master)

## Installation

```sh
# npm
npm install utf8-bin

# yarn
yarn add utf8-bin
```

## Usage
```javascript
// Browser
import { strToUtf8, utf8ToStr } from 'utf8-bin';

// Node.js
const { strToUtf8, utf8ToStr } = require('utf8-bin'); // v8 v45+ (codePoint)
const { strToUtf8, utf8ToStr } = require('utf8-bin/legacy');

// Node.js v8.6+
//  node --experimental-modules
// Node.js v12+
//  node --experimental-modules --es-module-specifier-resolution=node
import { strToUtf8, utf8ToStr } from 'utf8-bin/index';
```

## API
**String**

#### `utf8Length(str[, offset, length])`
#### `strToUtf8(str[, offset, length])`

**Uint8Array** | **Buffer**

#### `utf8ToStr(buf[, offset, length])`

**DataView**

#### `viewUtf8ToStr(view[, offset, length])`

## License
[MIT](LICENSE)
