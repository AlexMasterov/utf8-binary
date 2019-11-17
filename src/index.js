'use strict';

module.exports = class Utf8 {
  static get getUtf8Len() { return require('./utf8len'); }
  static get strToUint8() { return require('./str-uint8'); }
  static get strToUtf8() { return require('./str-utf8'); }
  static get utf8ToStr() { return require('./utf8-str'); }
  static get utf8viewToStr() { return require('./utf8view-str'); }
};
