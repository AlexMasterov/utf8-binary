'use strict';

const reduceExports = (exports, module) => {
  exports[module] = 'default';
  return exports;
};

const makeExportByDefault = (...targets) =>
  targets.reduce(reduceExports, {});

module.exports = makeExportByDefault(
  'str-uint8.js',
  'str-utf8.js',
  'utf8-str.js',
  'utf8len.js',
  'utf8view-str.js',
  // legacy (v8v45)
  'legacy/make/str-uint8.js',
  'legacy/str-uint8.js',
  'legacy/str-utf8.js',
  'legacy/utf8-str.js',
  'legacy/utf8view-str.js',
  // make
  'make/chr.js',
  'make/chr1.js',
  'make/chr1_str.js',
  'make/cpr.js',
  'make/empty.js',
  'make/str-uint8.js',
  'make/utf2.js',
  // chrs
  'chrs/utf2.js',
  'chrs/chr1.js',
  'chrs/chr1_str.js',
  // chrs/make
  'chrs/make/utf2.js',
  'chrs/make/chr1.js',
  'chrs/make/chr1_str.js',
);
