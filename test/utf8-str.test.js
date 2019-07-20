'use strict';

const utf8ToStr = source('utf8-str');
const utf8ToStrL = source('legacy/utf8-str');

suite('utf8ToStr + legacy');

const onByteTest = (buf) => {
  const str = toUtf8(buf);

  eq(utf8ToStr(buf), str);
  eq(utf8ToStrL(buf), str);
};

test('1 byte (u0000 — u007f)', () => {
  eachByte(utf8byte1, onByteTest);
});

test('2 bytes (u0080 — u07ff)', () => {
  eachByte(utf8byte2, onByteTest);
});

test('3 bytes (u0800 — uffff)', () => {
  eachByte(utf8byte3.low, onByteTest);
  eachByte(utf8byte3.high, onByteTest);
});

test('4 bytes (u10000 — u10ffff)', () => {
  eachByte(utf8byte4, onByteTest);
});
