# utf8-binary

A fast UTF-8 encoding and decoding.

[![npm](https://img.shields.io/npm/v/utf8-binary.svg)](https://www.npmjs.com/package/utf8-binary)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://travis-ci.org/AlexMasterov/utf8-binary.js.svg)](https://travis-ci.org/AlexMasterov/utf8-binary.js)
[![Coverage Status](https://coveralls.io/repos/github/AlexMasterov/utf8-binary.js/badge.svg?branch=master)](https://coveralls.io/github/AlexMasterov/utf8-binary.js?branch=master)

## Future works (not implemented yet)

* Web browsers

## Installation

```sh
# npm
npm install utf8-binary

# yarn
yarn add utf8-binary
```

## Usage

```javascript
const { utf8toBin, binToUtf8 } = require('utf8-binary');

const bin = utf8toBin('\u0080'); // '\xc2\x80'

const buf = Buffer.from(bin, 'binary');
binToUtf8(buf, 0, buf.length); // '\u0080'
```

## Tests

Run tests as follows:

```
npm run test
```

## License

Copyright &#169; 2018-present Alex Masterov &lt;alex.masterow@gmail.com&gt;

utf8-binary is licensed under MIT and can be used for any personal or commercial project.
