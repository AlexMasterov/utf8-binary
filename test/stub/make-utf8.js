'use strict';

const chr = String.fromCodePoint || String.fromCharCode;

const makeUtf8 = (start, end) => {
  const quantity = end - start;

  let symbols = '';
  while (quantity > symbols.length) {
    symbols += chr(start + symbols.length);
  }

  return Buffer.from(symbols, 'utf8');
};

module.exports = makeUtf8;
