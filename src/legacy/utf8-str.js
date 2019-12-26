'use strict';

const { chr } = require('../make');

const utf8ToStr = (bin, offset = 0, length = bin.length) => {
  const codes = [];

  let c = 0;
  while (offset < length) {
    c = bin[offset];

    if (c < 0x80) { // 1 byte
      codes.push(c);
      offset += 1;
    }
    else if (c < 0xe0) { // 2 bytes
      codes.push(
        (c & 0x1f) << 6
        | bin[offset + 1] & 0x3f);
      offset += 2;
    }
    else if (c < 0xf0) { // 3 bytes
      codes.push(
        (c & 0x0f) << 12
        | (bin[offset + 1] & 0x3f) << 6
        | bin[offset + 2] & 0x3f);
      offset += 3;
    }
    else { // 4 bytes
      c = (
        (c & 0x07) << 18
        | (bin[offset + 1] & 0x3f) << 12
        | (bin[offset + 2] & 0x3f) << 6
        | bin[offset + 3] & 0x3f
      ) - 0x10000;
      codes.push(
        0xd800 | c >> 10 & 0x3ff,
        0xdc00 | c & 0x3ff);
      offset += 4;
    }
  }

  if (codes.length > 8192) {
    let str = '';
    while (codes.length > str.length) {
      str += chr.apply(null, codes.slice(str.length, 4096 + str.length));
    }

    return str;
  }

  return chr.apply(null, codes);
};

module.exports = utf8ToStr;
