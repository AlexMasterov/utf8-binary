const charCode = String.fromCharCode;
const codePoint = String.fromCodePoint;

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

var CHR2 = utf8To11Bits();

const CHAR_CONTROL = '\u0080';
const CHAR_SAMARITAN = '\u0800';

function utf8toBin(str) {
  let bin = '';
  for (let c, i = 0; i < str.length; i++) {
    c = str[i];

    if (c < CHAR_CONTROL) { // 1 byte
      bin += c;
    } else if (c < CHAR_SAMARITAN) { // 2 bytes
      bin += CHR2[c.charCodeAt(0)];
    } else { // 3-4 bytes
      c = c.codePointAt(0);
      bin += charCode(
        0xe0 | c >> 12 & 0x0f,
        0x80 | c >> 6 & 0x3f,
        0x80 | c & 0x3f);
    }
  }

  return bin;
}

function binToUtf8(bin, offset, length) {
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
}

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

export { utf8toBin, binToUtf8, viewToUtf8 };
