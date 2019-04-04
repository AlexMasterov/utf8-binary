'use strict';

const npm = require('rollup-plugin-node-resolve');
const cjs = require('./cjs');
const terser = require('./terser');

const patch = require('./patch');
const { remove, copy } = require('./fs');

module.exports = {
  cjs,
  copy,
  npm,
  patch,
  remove,
  terser,
};
