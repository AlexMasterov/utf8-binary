'use strict';

const strToUint8 = source('str-uint8');
const strToUint8L = source('legacy/str-uint8');

suite('strToUint8 + legacy');

const onByteTest = (buf) => {
  const str = toUtf8(buf);
  const u8 = toUint8(buf);

  same(strToUint8(str), u8);
  same(strToUint8L(str), u8);
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
