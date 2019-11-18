'use strict';

const merge = require('./merge');
const toES6Module = require('./toES6Module');

const CHRS_REGEXP = /require\(['"](\.+\/chrs)['"]\)/;

const chrBuildToFactory = (code) => code
    .replace(CHRS_REGEXP, 'require(\'$1\/make\')');

module.exports = merge(
  toES6Module,
  {
    'str-utf8.js': [chrBuildToFactory],
    'legacy/str-utf8.js': [chrBuildToFactory],
  },
);
