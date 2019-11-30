'use strict';

const { chr, cpr } = require('../make');

const viewToStr = (view, offset = 0, length = view.byteLength) => {
  let c, str = '';
  while (offset < length) {
    c = view.getUint8(offset);

    if (c < 0x80) { // 1 byte
      str += chr(c);
      offset += 1;
    }
    else if (c < 0xe0) { // 2 bytes
      str += chr(
        (c & 0x1f) << 6
        | view.getUint8(offset + 1) & 0x3f);
      offset += 2;
    }
    else if (c < 0xf0) { // 3 bytes
      str += chr(
        (c & 0x0f) << 12
        | (view.getUint8(offset + 1) & 0x3f) << 6
        | view.getUint8(offset + 2) & 0x3f);
      offset += 3;
    }
    else { // 4 bytes
      c = ((c & 0x07) << 18
        | (view.getUint8(offset + 1) & 0x3f) << 12
        | (view.getUint8(offset + 2) & 0x3f) << 6
        | view.getUint8(offset + 3) & 0x3f) - 0x10000;
      str += chr(
        0xd800 | c >> 10 & 0x3ff,
        0xdc00 | c & 0x3ff);
      offset += 4;
    }
  }

  return str;
};

module.exports = viewToStr;