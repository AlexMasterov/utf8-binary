'use strict';

module.exports = {
  get cjs() { return require('./cjs'); },
  get esm() { return require('./esm'); },
  get mjs() { return require('./mjs'); },
};
