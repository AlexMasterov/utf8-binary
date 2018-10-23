import size from 'rollup-plugin-bundle-size';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './browser/index.js',
  output: {
    dir: 'dist',
    file: 'bundle.esm.js',
    format: 'esm',
  },
  plugins: [
    size(),
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
        loops: false,
        unsafe: true,
        unsafe_math: true,
        unsafe_comps: true,
        unsafe_methods: true,
        unsafe_undefined: true,
      },
      toplevel: true,
    }),
  ],
};
