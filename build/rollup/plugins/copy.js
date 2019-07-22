'use strict';

const { copySync } = require('fs-extra');

const makeFilterPaths = (paths) => {
  const exclude = new Set(paths);
  return (path) => !exclude.has(path);
};

const copy = ({ src, dest, exclude, verbose = false } = {}) => {
  const opts = {
    ...(exclude && { filter: makeFilterPaths(exclude) }),
  };

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
