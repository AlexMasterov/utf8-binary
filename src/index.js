'use strict';

module.exports = {
  get countUtf8() { return require('./count_utf8'); },
  get strToUint8() { return require('./str-uint8'); },
  get strToUtf8() { return require('./str-utf8'); },
  get utf8ToStr() { return require('./utf8-str'); },
  get viewToStr() { return require('./view-str'); },
};
