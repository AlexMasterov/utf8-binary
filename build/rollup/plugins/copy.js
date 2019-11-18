'use strict';

const { copySync } = require('fs-extra');

const makeFilterPaths = (paths) => {
  const excludes = new Set(paths);
  return (path) => !excludes.has(path);
};

const makeExcludeOpts = (exclude) => ({
  ...(exclude && { filter: makeFilterPaths(exclude) }),
});

const copy = ({ src, dest, exclude, verbose = false } = {}) => {
  const opts = makeExcludeOpts(exclude);
  return {
    name: 'rollup/plugins/copy',
    generateBundle() {
      try {
        copySync(src, dest, opts);
      } catch (err) {
        console.error(err);
        throw err;
      }
      verbose && console.log(`Successfully copied ${src} -> ${dest}`);
    },
  };
};

module.exports = copy;
