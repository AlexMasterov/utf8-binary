'use strict';

const utf8ToStr = source('utf8-str');
const utf8ToStrL = source('legacy/utf8-str');

suite('utf8ToStr + legacy');

test('1 byte (u0000 — u007f)', () => {
  utf8byte1((str, bin, buf) => {
    eq(utf8ToStr(buf), str);
    eq(utf8ToStrL(buf), str);
  });
});

test('2 bytes (u0080 — u07ff)', () => {
  utf8byte2((str, bin, buf) => {
    eq(utf8ToStr(buf), str);
    eq(utf8ToStrL(buf), str);
  });
});

test('3 bytes (u0800 — uffff)', () => {
  utf8byte3((str, bin, buf) => {
    eq(utf8ToStr(buf), str);
    eq(utf8ToStrL(buf), str);
  });
});

test('4 bytes (u10000 — u10ffff)', () => {
  utf8byte4((str, bin, buf) => {
    eq(utf8ToStr(buf), str);
    eq(utf8ToStrL(buf), str);
  });
});
