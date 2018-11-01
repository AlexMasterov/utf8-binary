'use strict';

const fromCharCode = String.fromCharCode;
const fromCodePoint = String.fromCodePoint;

function binToUtf8(bin, offset, length) {
  let str = '', c;
  while (offset < length) {
    c = bin[offset];

    if (c < 0x80) { // 1 byte
      str += fromCharCode(c);
      offset += 1;
    } else if (c < 0xe0) { // 2 bytes
      str += fromCharCode(
        (c & 0x1f) << 6
        | bin[offset + 1] & 0x3f);
      offset += 2;
    } else { // 3-4 bytes
      str += fromCodePoint(
        (c & 0x0f) << 12
        | (bin[offset + 1] & 0x3f) << 6
        | bin[offset + 2] & 0x3f);
      offset += 3;
    }
  }

  return str;
}

module.exports = binToUtf8;
