'use strict';

module.exports = class Utf8BinMake {
  static get chr() { return require('./chr'); }
  static get cpr() { return require('./cpr'); }
  // factory
  static get pushChr1() { return require('./chr1'); }
  static get pushEmpty() { return require('./empty'); }
  static get pushUtf2() { return require('./utf2'); }
  static get makeChr1Str() { return require('./chr1_str'); }
};
