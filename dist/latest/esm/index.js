import { charCode, codePoint, charCodes2 } from 'ascii-chr';

const binToUtf8 = (bin, offset, length) => {
  let str = '', c;
  while (offset < length) {
    c = bin[offset];

    if (c < 0x80) { // 1 byte
      str += charCode(c);
      offset += 1;
    } else if (c < 0xe0) { // 2 bytes
      str += charCode(
        (c & 0x1f) << 6
        | bin[offset + 1] & 0x3f);
      offset += 2;
    } else { // 3-4 bytes
      str += codePoint(
        (c & 0x0f) << 12
        | (bin[offset + 1] & 0x3f) << 6
        | bin[offset + 2] & 0x3f);
      offset += 3;
    }
  }

  return str;
};

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

const viewToUtf8 = (view, offset, length) => {
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
};

export { binToUtf8, utf8toBin, viewToUtf8 };
