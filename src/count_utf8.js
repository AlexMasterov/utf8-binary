'use strict';

const {
 CONTROL,
 SAMARITAN,
 SURROGATE_HIGH,
 SURROGATE_LOW,
} = require('./unicode');

const countUtf8 = (bin, offset = 0, length = bin.length) => {
  let c, len = 0;
  while (offset < length) {
    c = bin[offset];

    if (c < CONTROL) { // 1 byte
      len += 1;
      offset += 1;
    }
    else if (c < SAMARITAN) { // 2 bytes
      len += 2;
      offset += 1;
    }
    else if (
      c < SURROGATE_HIGH ||
      c > SURROGATE_LOW
    ) { // 3 bytes
      len += 3;
      offset += 1;
    }
    else { // 4 bytes
      len += 4;
      offset += 2;
    }
  }

  return len;
};

module.exports = countUtf8;
