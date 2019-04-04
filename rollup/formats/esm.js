'use strict';

const { cjs, npm, remove, patch, terser } = require('../plugins');

const esm = ({ input, target, external, exports, patches, minify = false }) => ({
  input,
  output: {
    format: 'esm',
    file: target,
    freeze: false,
    preferConst: true,
  },
  external,
  plugins: [
    patches && patch(patches),
    remove({
      path: target,
    }),
    npm({
      module: true,
      extensions: ['.js'],
      preferBuiltins: false,
    }),
    cjs({ exports }),
    minify && terser(),
  ],
});

module.exports = esm;
