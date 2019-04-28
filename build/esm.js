'use strict';

const { build, esm } = require('./rollup');
const exportTypes = require('./exports');
const { toBrowser } = require('./patches');

build('esm (browser)')(
  esm({
    input: {
      'index.js': 'index.js',
      'unicode.js': 'unicode.js',
      'make/index.js': 'make/index.js',
      'chrs/index.js': 'chrs/index.js',
      'chrs/make/index.js': 'chrs/make/index.js',
      'legacy/index.js': 'legacy/index.js',
    },
    target: 'dist/latest/esm',
    exports: exportTypes,
    patch: toBrowser,
  }),
).catch(console.error);
