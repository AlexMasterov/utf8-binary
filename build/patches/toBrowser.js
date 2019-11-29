'use strict';

const merge = require('./merge');
const toES6Module = require('./toES6Module');

const ChrsRE = {
  FROM: /require\(['"](\.+\/chrs)['"]\)/,
  TO: 'require(\'$1\/make\')',
};

const chrBuildToFactory = (code) => code
  .replace(ChrsRE.FROM, ChrsRE.TO);

module.exports = merge(
  toES6Module,
  {
    'str-utf8.js': [chrBuildToFactory],
    'legacy/str-utf8.js': [chrBuildToFactory],
  },
);
