'use strict';

const merge = require('./merge');
const toES6Module = require('./toES6Module');

const chrBuildToFactory = code => code
    .replace(/require\(['"](\.+\/chrs)['"]\)/, 'require(\'$1\/make\')');

module.exports = merge(
  toES6Module,
  {
    'str-utf8.js': [chrBuildToFactory],
    'legacy/str-utf8.js': [chrBuildToFactory],
  }
);
