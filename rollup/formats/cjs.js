'use strict';

const { remove, copy, patch } = require('../plugins');

const extractPaths = (paths) =>
  Object.entries(paths).map(([filename]) => filename);

const trimExt = (filename) => {
  const ext = filename.lastIndexOf('.');
  return ext > 0 ? filename.slice(0, ext) : filename;
};

const cjs = ({ input = [], target, patches } = {}) => ({
  input: [
    ...input,
    ...patches ? extractPaths(patches).map(trimExt) : [],
  ],
  output: {
    dir: target,
    format: 'cjs',
    preferConst: true,
  },
  plugins: [
    patches && patch(patches),
    remove({
      path: target,
    }),
    copy({
      src: `src`,
      dest: target,
      exclude: patches && extractPaths(patches),
    }),
  ],
});

module.exports = cjs;
