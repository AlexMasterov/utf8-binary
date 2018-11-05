'use strict';

const { charCode, codePoint } = require('./binary');

function viewToUtf8(view, offset, length) {
  let str = '', c;
  while (offset < length) {
    c = view.getUint8(offset);

    if (c < 0x80) { // 1 byte
      str += charCode(c);
      offset += 1;
    } else if (c < 0xe0) { // 2 bytes
      str += charCode(
        (c & 0x1f) << 6
        | view.getUint8(offset + 1) & 0x3f);
      offset += 2;
    } else { // 3-4 bytes
      str += codePoint(
        (c & 0x0f) << 12
        | (view.getUint8(offset + 1) & 0x3f) << 6
        | view.getUint8(offset + 2) & 0x3f);
      offset += 3;
    }
  }

  return str;
}

module.exports = viewToUtf8;
