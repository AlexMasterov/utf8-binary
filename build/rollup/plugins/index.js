'use strict';

module.exports = class Plugins {
  static get transform() { return require('./patch'); }
  // fs
  static get copy() { return require('./copy'); }
  static get remove() { return require('./remove'); }
  // external
  static get npm() { return require('rollup-plugin-node-resolve'); }
  static get cjs() { return require('./cjs'); }
};
