'use strict';

const makeStrToUint8 = ({
  bufAllocMin = 512,
  // private
  u8,
  alloc = 0,
} = {}) => (str, offset = 0, length = str.length) => {
  if (length > alloc) {
    alloc = bufAllocMin * (length >>> 10 | 2);
    u8 = new Uint8Array(alloc);
  }

  let c, index = 0;
  while (offset < length) {
    c = str.charCodeAt(offset);

    if (c < 0x80) { // 1 byte
      u8[index] = c;
      index += 1;
    }
    else if (c < 0x800) { // 2 bytes
      u8[index] = 0xc0 | c >> 6;
      u8[index + 1] = 0x80 | c & 0x3f;
      index += 2;
    }
    else if (
      c < 0xd800 ||
      c > 0xdfff
    ) { // 3 bytes
      u8[index] = 0xe0 | c >> 0xc;
      u8[index + 1] = 0x80 | c >> 6 & 0x3f;
      u8[index + 2] = 0x80 | c & 0x3f;
      index += 3;
    }
    else { // 4 bytes
      c = ((c & 0x3ff) << 10
        | (str.charCodeAt(offset + 1) & 0x3ff))
        + 0x10000;
      u8[index] = 0xf0 | c >> 18;
      u8[index + 1] = 0x80 | c >> 12 & 0x3f;
      u8[index + 2] = 0x80 | c >> 6 & 0x3f;
      u8[index + 3] = 0x80 | c & 0x3f;
      index += 4;
      offset += 2;

      continue;
    }

    offset += 1;
  };

  return u8.subarray(0, index);
};

module.exports = makeStrToUint8;
