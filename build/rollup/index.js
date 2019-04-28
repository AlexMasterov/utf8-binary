'use strict';

module.exports = class Rollup {
  static get build() { return require('./build'); }
  // formats
  static get cjs() { return require('./formats/cjs'); }
  static get esm() { return require('./formats/esm'); }
  static get mjs() { return require('./formats/mjs'); }
};
