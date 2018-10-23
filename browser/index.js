const fromCharCode = String.fromCharCode;
const fromCodePoint = String.fromCodePoint;

function utf8To2Bytes() {
  let i = 2048;
  const chr = new Array(i);
  chr[i] = '\x00';
  // 2 bytes
  while (i > 0x80) chr[i -= 1] = fromCharCode(0xc0 | i >> 6 & 0x1f, 0x80 | i & 0x3f);
  // 1 byte
  while (i > 0) chr[i -= 1] = fromCharCode(i);
  return chr;
}

const CHR2 = utf8To2Bytes();
const CHAR_CONTROL = '\u0080';
const CHAR_SAMARITAN = '\u0800';

export function utf8toBin(str) {
  let bin = '';
  for (let c, i = 0; i < str.length; i++) {
    c = str[i];

    if (c < CHAR_CONTROL) { // 1 byte
      bin += c;
    } else if (c < CHAR_SAMARITAN) { // 2 bytes
      bin += CHR2[c.charCodeAt(0)];
    } else { // 3-4 bytes
      c = c.codePointAt(0);
      bin += fromCharCode(
        0xe0 | c >> 12 & 0x0f,
        0x80 | c >> 6 & 0x3f,
        0x80 | c & 0x3f);
    }
  }

  return bin;
}

export function binToUtf8(bin, offset, length) {
  let str = '';
  for (let c, i = offset; i < length; i++) {
    c = bin[i];

    if (c < 0x80) { // 1 byte
      str += fromCharCode(c);
    } else if (c < 0xe0) { // 2 bytes
      str += fromCharCode(
        (c & 0x1f) << 6
        | bin[++i] & 0x3f);
    } else { // 3-4 bytes
      str += fromCodePoint(
        (c & 0x0f) << 12
        | (bin[i + 1] & 0x3f) << 6
        | bin[i + 2] & 0x3f);
      i += 2;
    }
  }

  return str;
}
