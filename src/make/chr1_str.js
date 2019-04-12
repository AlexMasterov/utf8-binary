'use strict';

const chr = require('./chr');

const makeChr1Str = (i = 0, str = '') => {
  while (i < 257) str += chr(i & 0xff), i++;
};

module.exports = makeChr1Str;
