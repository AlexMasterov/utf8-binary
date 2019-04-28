'use strict';

const { rollup } = require('rollup');

const bundle = async (config) => {
  const result = await rollup(config);
  return result.write(config.output);
};

const build = (name = 'Noname') =>
  async (...configs) => {
    await Promise.all(configs.map(bundle));
    console.log(`${name} done`);
  };

module.exports = build;
