'use strict';

const { build, cjs } = require('./rollup');

build('cjs (node)').with(
  cjs({ target: 'dist/latest/cjs' }),
);
