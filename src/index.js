'use strict';
/* istanbul ignore file */

module.exports = class Utf8Binary {
  static get utf8toBin() { return require('./utf8-bin'); }
  static get binToUtf8() { return require('./bin-utf8'); }
};