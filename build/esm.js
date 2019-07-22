'use strict';

const { build, esm } = require('./rollup');
const { toBrowser } = require('./patches');

const inputFiles = require('./esm-input');
const exportTypes = require('./esm-export');

build('esm (browser)').with(
  esm({
    input: inputFiles,
    target: 'dist/latest/esm',
    exports: exportTypes,
    patch: toBrowser,
  }),
);
