'use strict';

const strToUtf8 = source('str-utf8');
const strToUtf8L = source('legacy/str-utf8');

suite('strToUtf8 + legacy');

test('1 byte (u0000 — u007f)', () => {
  utf8byte1((str, bin) => {
    eq(strToUtf8(str), bin);
    eq(strToUtf8L(str), bin);
  });
});

test('2 bytes (u0080 — u07ff)', () => {
  utf8byte2((str, bin) => {
    eq(strToUtf8(str), bin);
    eq(strToUtf8L(str), bin);
  });
});

test('3 bytes (u0800 — uffff)', () => {
  utf8byte3((str, bin) => {
    eq(strToUtf8(str), bin);
    eq(strToUtf8L(str), bin);
  });
});

test('4 bytes (u10000 — u10ffff)', () => {
  utf8byte4((str, bin) => {
    eq(strToUtf8(str), bin);
    eq(strToUtf8L(str), bin);
  });
});
