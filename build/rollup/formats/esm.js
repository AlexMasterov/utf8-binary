'use strict';

const { makeKeyResolver, makeInputNormalizer, remake } = require('./resolvers');
const {
  cjs,
  npm,
  remove,
  transform,
} = require('../plugins');

const esm = ({
  src = 'src',
  input = { 'index.js': 'index.js' },
  target,
  exports,
  patch,
}) => {
  const keyResolver = makeKeyResolver(src);
  return {
    input: {
      ...(input && remake(input, makeInputNormalizer(src))),
    },
    output: {
      format: 'esm',
      dir: target,
      freeze: false,
      interop: true,
      esModule: false,
      preferConst: true,
    },
    treeshake: {
      annotations: false,
      pureExternalModules: true,
      propertyReadSideEffects: false,
    },
    plugins: [
      patch && transform(remake(patch, keyResolver)),
      remove({ path: target }),
      npm({
        mainFields: ['module', 'main', 'browser'],
        extensions: ['.js'],
        preferBuiltins: false,
      }),
      cjs({ exports: remake(exports, keyResolver) }),
    ],
  };
};

module.exports = esm;
