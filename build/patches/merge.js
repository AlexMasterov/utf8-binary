'use strict';

const merge = (...patches) =>
  patches.reduce((merged, patch) => {
    Object.keys(patch).forEach(module => {
      const patches = patch[module];
      const found = merged[module];
      merged[module] = found
        ? [...found, ...patches]
        : patches;
    });
    return merged;
  }, {});

module.exports = merge;
