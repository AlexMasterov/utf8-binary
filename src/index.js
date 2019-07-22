'use strict';

module.exports = class Utf8 {
  static get strToUint8() { return require('./str-uint8'); }
  static get strToUtf8() { return require('./str-utf8'); }
  static get utf8Length() { return require('./utf8_length'); }
  static get utf8ToStr() { return require('./utf8-str'); }
  static get utf8viewToStr() { return require('./utf8view-str'); }
};
