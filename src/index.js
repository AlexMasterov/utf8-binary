'use strict';
/* istanbul ignore file */

module.exports = class Utf8Binary {
  static get utf8toBin() { return require('./utf8ToBin'); }
  static get binToUtf8() { return require('./binToUtf8'); }
  static get viewToUtf8() { return require('./viewToUtf8'); }
};
