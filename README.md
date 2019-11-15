# @asm/utf8

A fast UTF-8 encoding and decoding tools.

[![npm](https://img.shields.io/github/package-json/v/AlexMasterov/utf8.js)](https://www.npmjs.com/package/@asm/utf8)
[![Build Status](https://travis-ci.org/AlexMasterov/utf8.js.svg)](https://travis-ci.org/AlexMasterov/utf8.js)
[![Coverage Status](https://coveralls.io/repos/github/AlexMasterov/utf8.js/badge.svg?branch=master)](https://coveralls.io/github/AlexMasterov/utf8.js?branch=master)

## Installation
With [npm](https://www.npmjs.com/package/npm):
```sh
npm install @asm/utf8
```
With [yarn](https://yarnpkg.com):
```sh
yarn add @asm/utf8
```
## Usage
__ES Modules__
```js
// Browser | Node v12.0 --experimental-modules
import { strToUtf8, utf8ToStr } from '@asm/utf8';        // ES6 (codePoint)
import { strToUtf8, utf8ToStr } from '@asm/utf8/legacy'; // ES5 (charCode)

// Node v11.0 --experimental-modules --es-module-specifier-resolution=node
// Node v8.6  --experimental-modules
import { strToUtf8, utf8ToStr } from '@asm/utf8/index';
```
__CommonJS__
```js
const { strToUtf8, utf8ToStr } = require('@asm/utf8');
```

## API
##### `utf8Length(str[, offset, length])`
##### `strToUtf8(str[, offset, length])`
##### `strToUint8(str[, offset, length])`
##### `utf8ToStr(buf[, offset, length])`
##### `utf8viewToStr(view[, offset, length])`

## License
[MIT](LICENSE)
