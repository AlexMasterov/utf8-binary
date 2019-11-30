'use strict';

const reduceExports = (exports, module) => {
  exports[module] = 'default';
  return exports;
};

const makeExportByDefault = (...targets) =>
  targets.reduce(reduceExports, {});

module.exports = makeExportByDefault(
  // index
  'count_utf8.js',
  'str-uint8.js',
  'str-utf8.js',
  'utf8-str.js',
  'view-str.js',
  // legacy (v8v45)
  'legacy/str-uint8.js',
  'legacy/str-utf8.js',
  'legacy/utf8-str.js',
  'legacy/view-str.js',
  'legacy/make/str-uint8.js',
  // make
  'make/chr.js',
  'make/chr1.js',
  'make/chr1_str.js',
  'make/chr2.js',
  'make/cpr.js',
  'make/empty.js',
  'make/str-uint8.js',
  // chrs
  'chrs/chr1.js',
  'chrs/chr1_str.js',
  'chrs/chr2.js',
  // chrs/make
  'chrs/make/chr1.js',
  'chrs/make/chr1_str.js',
  'chrs/make/chr2.js',
);
