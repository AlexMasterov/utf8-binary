# utf8-bin

A fast UTF-8 encoding and decoding.

[![npm](https://img.shields.io/npm/v/utf8-bin.svg)](https://www.npmjs.com/package/utf8-bin)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
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
const { utf8toBin, binToUtf8, viewToUtf8 } = require('utf8-bin');

const bin = utf8toBin('\u0080'); // '\xc2\x80'

const buf = Buffer.from(bin, 'binary');
binToUtf8(buf, 0, buf.length); // '\u0080'

const view = new DataView(bin.buffer, bin.byteOffset, bin.byteLength);
viewToUtf8(View, 0, view.byteLength); // '\u0080'
```

## Tests

Run tests as follows:

```
npm run test
```

## License

utf8-bin is licensed under MIT and can be used for any personal or commercial project.
