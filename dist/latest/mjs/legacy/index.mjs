import { chr } from '../make/index.mjs';
import { chrUtf2 } from '../chrs/index.mjs';
import { CONTROL, SAMARITAN, SURROGATE_HIGH, SURROGATE_LOW } from '../unicode.mjs';

const strToUtf8 = (str, offset = 0, length = str.length) => {
  let c, bin = '';
  while (offset < length) {
    c = str[offset];

    if (c < CONTROL) { // 1 byte
      bin += c;
      offset += 1;
    }
    else if (c < SAMARITAN) { // 2 bytes
      bin += chrUtf2[c.charCodeAt(0)];
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

const utf8ToStr = (bin, offset = 0, length = bin.length) => {
  let c, str = '';
  while (offset < length) {
    c = bin[offset];

    if (c < 0x80) { // 1 byte
      str += chr(c);
      offset += 1;
    }
    else if (c < 0xe0) { // 2 bytes
      str += chr(
        (c & 0x1f) << 6
        | bin[offset + 1] & 0x3f);
      offset += 2;
    }
    else if (c < 0xf0) { // 3 bytes
      str += chr(
        (c & 0x0f) << 12
        | (bin[offset + 1] & 0x3f) << 6
        | bin[offset + 2] & 0x3f);
      offset += 3;
    }
    else { // 4 bytes
      c = ((c & 0x07) << 18
        | (bin[offset + 1] & 0x3f) << 12
        | (bin[offset + 2] & 0x3f) << 6
        | bin[offset + 3] & 0x3f) - 0x10000;
      str += chr(
        0xd800 | c >> 10 & 0x3ff,
        0xdc00 | c & 0x3ff);
      offset += 4;
    }
  }

  return str;
};

const viewUtf8ToStr = (view, offset = 0, length = view.byteLength) => {
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

export { strToUtf8, utf8ToStr, viewUtf8ToStr };
