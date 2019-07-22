'use strict';

const { rollup } = require('rollup');

const makeBundle = async (config) => {
  const result = await rollup(config);
  return result.write(config.output);
};

const build = (name = 'Noname') => ({
  async with(...configs) {
    await Promise
      .all(configs.map(makeBundle))
      .catch(console.error);

    console.log(`${name} done`);
  },
});

module.exports = build;
