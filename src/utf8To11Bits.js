'use strict';

const { charCode } = require('./binary');

function utf8To11Bits() {
  let i = 2048, chr = new Array(i);
  chr[i] = '\x00';
  // 2 bytes
  while (i > 0x80) {
    chr[i -= 1] = charCode(
      0xc0 | i >> 6 & 0x1f,
      0x80 | i & 0x3f);
  }
  // 1 byte
  while (i > 0) {
    chr[i -= 1] = charCode(i);
  }

  return chr;
}

module.exports = utf8To11Bits();
