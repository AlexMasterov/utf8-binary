'use strict';

module.exports = class Utf8Binary {
  static get binToUtf8() { return require('./binToUtf8'); }
  static get utf8toBin() { return require('./utf8ToBin'); }
  static get viewToUtf8() { return require('./viewToUtf8'); }
};
