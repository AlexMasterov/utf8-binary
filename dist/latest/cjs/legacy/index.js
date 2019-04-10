'use strict';

module.exports = class Utf8BinLegacy {
  static get strToUtf8() { return require('./str-utf8'); }
  static get utf8ToStr() { return require('./utf8-str'); }
  static get viewUtf8ToStr() { return require('./view/utf8-str'); }
};
