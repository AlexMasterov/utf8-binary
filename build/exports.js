'use strict';

const makeExportByDefault = (...targets) =>
  targets.reduce((exports, module) =>
    (exports[module] = 'default', exports), {});

module.exports = makeExportByDefault(
  'str-utf8.js',
  'utf8-str.js',
  'utf8_length.js',
  'view/utf8-str.js',
  // legacy (v8v45)
  'legacy/str-utf8.js',
  'legacy/utf8-str.js',
  'legacy/view/utf8-str.js',
  // make
  'make/chr.js',
  'make/cpr.js',
  'make/chr1.js',
  'make/chr1_str.js',
  'make/utf2.js',
  'make/empty.js',
  // chrs
  'chrs/utf2.js',
  'chrs/chr1.js',
  'chrs/chr1_str.js',
  // chrs/make
  'chrs/make/utf2.js',
  'chrs/make/chr1.js',
  'chrs/make/chr1_str.js',
);
