'use strict';

const { charCode, charCodes2 } = require('ascii-chr');

const CHAR_CONTROL = '\u0080';
const CHAR_SAMARITAN = '\u0800';

const utf8toBin = (str) => {
  let bin = '';
  for (let c, i = 0; i < str.length; i++) {
    c = str[i];

    if (c < CHAR_CONTROL) { // 1 byte
      bin += c;
    } else if (c < CHAR_SAMARITAN) { // 2 bytes
      bin += charCodes2[c.charCodeAt(0)];
    } else { // 3-4 bytes
      c = c.codePointAt(0);
      bin += charCode(
        0xe0 | c >> 12 & 0x0f,
        0x80 | c >> 6 & 0x3f,
        0x80 | c & 0x3f);
    }
  }

  return bin;
};

module.exports = utf8toBin;
