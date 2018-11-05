import del from 'rollup-plugin-delete';
import resolve from 'rollup-plugin-node-resolve';
import cjs from "rollup-plugin-cjs-es";
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-bundle-size';

export default [{
  input: './src/index.js',

  output: {
    dir: 'dist',
    file: 'index.esm.js',
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
  input: './dist/index.esm.js',

  output: {
    dir: 'dist',
    file: 'index.esm.min.js',
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
