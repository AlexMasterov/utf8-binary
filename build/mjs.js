'use strict';

const { build, mjs } = require('./rollup');
const exportTypes = require('./exports');
const { toES6Module } = require('./patches');

build('mjs (node)')(
  mjs({
    input: {
      'index.js': 'index.js',
      'unicode.js': 'unicode.js',
      'make/index.js': 'make/index.js',
      'chrs/index.js': 'chrs/index.js',
      'chrs/make/index.js': 'chrs/make/index.js',
      'legacy/index.js': 'legacy/index.js',
    },
    target: 'dist/latest/mjs',
    exports: exportTypes,
    patch: toES6Module,
  }),
).catch(console.error);
