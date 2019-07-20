'use strict';

const getByteLen = (byte) => {
  if (byte < 0x80) return 1;
  if (byte < 0xe0) return 2;
  if (byte < 0xf0) return 3;
  return 4;
};

const eachByte = (buf, onByte) => {
  let i = 0;
  while (buf.length > i) {
    onByte(buf.slice(i, i += getByteLen(buf[i])));
  }
};

module.exports = {
  eachByte,
};
