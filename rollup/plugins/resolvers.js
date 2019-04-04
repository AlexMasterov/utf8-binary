'use strict';

const { resolve } = require('path');

const resolveModulePath = (modules) =>
  Object.entries(modules)
    .map(([module, value]) => [resolve(module), value]);

module.exports = {
  resolveModulePath,
};
