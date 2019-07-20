'use strict';

const makeUtf8 = require('./make-utf8');

const utf8byte1 = makeUtf8(0, 127);
const utf8byte2 = makeUtf8(128, 2047);

// skip surrogates
const utf8byte3 = {
  low: makeUtf8(2048, 55295),
  high: makeUtf8(57344, 65535),
};

const utf8byte4 = makeUtf8(65536, 111411);

module.exports = {
  utf8byte1,
  utf8byte2,
  utf8byte3,
  utf8byte4,
};
