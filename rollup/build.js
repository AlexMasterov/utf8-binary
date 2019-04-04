'use strict';

const { rollup } = require('rollup');
const { esm, cjs } = require('./formats');
const { browser } = require('./patches');

async function bundle(config) {
  const result = await rollup(config);
  return result.write(config.output);
}

async function build(...configs) {
  await Promise.all(configs.map(bundle));
  console.log('done');
}

const makeExportByDefault = (...exportee) =>
  exportee.reduce((exports, module) =>
    (exports[module] = 'default', exports), {});

const esmExportTypes = makeExportByDefault(
  'src/binToUtf8.js',
  'src/utf8toBin.js',
  'src/viewToUtf8.js',
);

build(
  cjs({
    target: 'dist/latest/cjs',
  }),
  esm({
    input: 'src/index.js',
    target: 'dist/latest/esm/index.js',
    external: ['ascii-chr'],
    exports: esmExportTypes,
    patches: browser,
  }),
  esm({
    input: 'src/index.js',
    target: 'dist/latest/esm/index.min.js',
    exports: esmExportTypes,
    patches: browser,
    minify: true,
  })
).catch(console.error);
