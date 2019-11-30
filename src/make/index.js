'use strict';

module.exports = {
  get chr() { return require('./chr'); },
  get cpr() { return require('./cpr'); },
  // factories
  get pushChr1() { return require('./chr1'); },
  get makeChr1Str() { return require('./chr1_str'); },
  get pushChr2() { return require('./chr2'); },
  get pushEmpty() { return require('./empty'); },
  get makeStrToUint8() { return require('./str-uint8'); },
};
