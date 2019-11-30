'use strict';

const { chr } = require('../make');
const { chr2 } = require('../chrs');
const {
 CONTROL,
 SAMARITAN,
 SURROGATE_HIGH,
 SURROGATE_LOW,
} = require('../unicode');

const strToUtf8 = (str, offset = 0, length = str.length) => {
  let c, bin = '';
  while (offset < length) {
    c = str[offset];

    if (c < CONTROL) { // 1 byte
      bin += c;
      offset += 1;
    }
    else if (c < SAMARITAN) { // 2 bytes
      bin += chr2[c.charCodeAt(0)];
      offset += 1;
    }
    else if (
      c < SURROGATE_HIGH ||
      c > SURROGATE_LOW
    ) { // 3 bytes
      c = c.charCodeAt(0);
      bin += chr(
        0xe0 | c >> 12 & 0x0f,
        0x80 | c >> 6 & 0x3f,
        0x80 | c & 0x3f);
      offset += 1;
    }
    else { // 4 bytes
      c = ((c.charCodeAt(0) & 0x3ff) << 10
        | str.charCodeAt(offset + 1) & 0x3ff)
        + 0x10000;
      bin += chr(
        0xf0 | c >> 18,
        0x80 | c >> 12 & 0x3f,
        0x80 | c >> 6 & 0x3f,
        0x80 | c & 0x3f);
      offset += 2;
    }
  }

  return bin;
};

module.exports = strToUtf8;
