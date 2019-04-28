'use strict';

const { build, cjs } = require('./rollup');

build('cjs (node)')(
  cjs({ target: 'dist/latest/cjs' }),
).catch(console.error);
