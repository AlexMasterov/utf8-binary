'use strict';

const { build, mjs } = require('./rollup');
const { toES6Module } = require('./patches');

const inputFiles = require('./esm-input');
const exportTypes = require('./esm-export');

build('mjs (node)').with(
  mjs({
    input: inputFiles,
    target: 'dist/latest/mjs',
    exports: exportTypes,
    patch: toES6Module,
  }),
);
