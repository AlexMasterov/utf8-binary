'use strict';

const chr = require('./chr');

const pushChr2 = (arr, i = 0) => {
  while (i < 2048) {
    arr[i] = chr(
      0xc0 | i >> 6 & 0x1f,
      0x80 | i & 0x3f);
    i++;
  }
};

module.exports = pushChr2;
