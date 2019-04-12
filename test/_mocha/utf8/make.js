'use strict';

const chr = String.fromCodePoint || String.fromCharCode;

const isSurrogates = (len) =>
  len > 55295 && len < 57344;

const utf8length = (len) => {
  if (len < 128) return 1;
  if (len < 2048) return 2;
  if (len < 65536 && !isSurrogates(len)) return 3;
  return 4;
};

const makeUtf8 = (start, end) => {
  let symbols = '';
  while (end > start + symbols.length) {
    symbols += chr(start + symbols.length);
  }

  const bytes = utf8length(end);
  const buf = Buffer.from(symbols, 'utf8');
  symbols = undefined;

  return (test) => {
    for (let i = 0; i < buf.length; i += bytes) {
      test(
        buf.utf8Slice(i, i + bytes),
        buf.latin1Slice(i, i + bytes),
        buf.slice(i, i + bytes),
      );
    }
  };
};

module.exports = makeUtf8;
