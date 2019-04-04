'use strict';

const cjs = require('rollup-plugin-cjs-es');
const { resolveModulePath } = require('./resolvers');

const makeExportTypeFilter = (exports) => {
  const types = new Map(resolveModulePath(exports));
  return (id) => types.has(id) ? types.get(id) : null;
};

module.exports = (options = {}) =>
  cjs({
    cache: false,
    nested: true,
    sourceMap: false,
    ...options,
    ...(options.exports && {
      exportType: makeExportTypeFilter(options.exports),
    }),
  });
