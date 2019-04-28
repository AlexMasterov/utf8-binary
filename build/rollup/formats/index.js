'use strict';

module.exports = class Formats {
  static get cjs() { return require('./cjs'); }
  static get esm() { return require('./esm'); }
  static get mjs() { return require('./mjs'); }
};
