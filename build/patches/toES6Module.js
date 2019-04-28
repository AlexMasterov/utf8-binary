'use strict';

const toObjRequire = require('./toObjRequire');

module.exports = toObjRequire(
  'index.js',
  'make/index.js',
  'chrs/index.js',
  'chrs/make/index.js',
  'legacy/index.js',
);
