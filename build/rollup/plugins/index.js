'use strict';

module.exports = {
  get transform() { return require('./patch'); },
  // fs
  get copy() { return require('./copy'); },
  get remove() { return require('./remove'); },
  // external
  get npm() { return require('rollup-plugin-node-resolve'); },
  get cjs() { return require('./cjs'); },
};
