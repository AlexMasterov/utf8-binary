'use strict';

const { removeSync } = require('fs-extra');

const remove = ({ path, verbose = false } = {}) => ({
  name: 'rollup/plugins/remove',
  buildStart() {
    try {
      removeSync(path);
    } catch (err) {
      console.error(err);
      throw err;
    }
    verbose && console.log(`Successfully deleted ${path}`);
  },
});

module.exports = remove;
