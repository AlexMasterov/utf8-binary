'use strict';

module.exports = {
  get build() { return require('./build'); },
  // formats
  get cjs() { return require('./formats/cjs'); },
  get esm() { return require('./formats/esm'); },
  get mjs() { return require('./formats/mjs'); },
};
