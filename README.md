# utf8-bin

A fast UTF-8 encoding and decoding.

[![npm](https://img.shields.io/npm/v/utf8-bin.svg)](https://www.npmjs.com/package/utf8-bin)
[![Build Status](https://travis-ci.org/AlexMasterov/utf8-bin.js.svg)](https://travis-ci.org/AlexMasterov/utf8-bin.js)
[![Coverage Status](https://coveralls.io/repos/github/AlexMasterov/utf8-bin.js/badge.svg?branch=master)](https://coveralls.io/github/AlexMasterov/utf8-bin.js?branch=master)

## Installation
With [npm](https://www.npmjs.com/package/npm):
```sh
npm install utf8-bin
```
With [yarn](https://yarnpkg.com):
```sh
yarn add utf8-bin
```
## Usage
__ES Modules__
```js
const { strToUtf8, utf8ToStr } = require('utf8-bin');        // ES6 (codePoint)
const { strToUtf8, utf8ToStr } = require('utf8-bin/legacy'); // ES5

// Node v8.6  --experimental-modules
// Node v12.0 --experimental-modules --es-module-specifier-resolution=node
import { strToUtf8, utf8ToStr } from 'utf8-bin/index';
```
__CommonJS__
```js
const { strToUtf8, utf8ToStr } = require('utf8-bin');
```

## API
#### `utf8Length(str[, offset, length])`
#### `strToUtf8(str[, offset, length])`
#### `utf8ToStr(buf[, offset, length])`
#### `viewUtf8ToStr(view[, offset, length])`

## License
[MIT](LICENSE)
