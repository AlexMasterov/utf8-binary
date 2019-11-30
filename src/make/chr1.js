'use strict';

const chr = require('./chr');

const pushChr1 = (arr, i = 0) => {
  while (i < 257) {
    arr[i] = chr(i & 0xff);
    i++;
  }
};

module.exports = pushChr1;
