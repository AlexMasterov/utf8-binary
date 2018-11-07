import del from 'rollup-plugin-delete';
import resolve from 'rollup-plugin-node-resolve';
import cjs from "rollup-plugin-cjs-es";
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-bundle-size';

import { main, module } from './package.json';

export default [{
  input: main,

  output: {
    file: module,
    format: 'esm',
  },

  treeshake: {
    propertyReadSideEffects: true,
    pureExternalModules: true,
  },

  plugins: [{
    resolveId(importee) {
      return importee.endsWith('chr2')
        ? './src/utf8To11Bits.js'
        : null;
    },
    transform(code, id) {
      if (!id.endsWith('index.js')) return;
      return code
        .replace(/class [^{]+/g, '')
        .replace(/static? get (.+)\(\)[^}]+}/g, `$1: require('./$1'),`);
    },
  },
  del({ targets: 'dist/*' }),
  resolve({ extensions: ['.js'] }),
  cjs({ nested: true }),
  ],
}, {
  input: module,

  output: {
    file: module.replace('.js', '.min.js'),
    format: 'esm',
  },

  plugins: [
    terser({
      ecma: 6,
      parse: {
        ecma: 8,
      },
      output: {
        ecma: 6,
        quote_style: 3,
        comments: false,
        beautify: false,
      },
      compress: {
        ecma: 6,
        inline: 2,
        warnings: true,
        booleans: true,
        loops: true,
        keep_fnames: false,
        keep_infinity: true,
        unsafe: true,
        unsafe_math: true,
        unsafe_comps: true,
        unsafe_methods: true,
        unsafe_undefined: true,
      },
      mangle: {
        toplevel: true,
      },
      ie8: false,
      toplevel: true,
      sourcemap: false,
      warnings: false,
    }),
    size(),
  ],
}];
