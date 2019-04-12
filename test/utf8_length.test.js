'use strict';

const utf8Length = source('utf8_length');

suite('utf8Length');

test('1 byte (u0000 — u007f)', () => {
  utf8byte1((str, bin) => {
    eq(utf8Length(str), bin.length);
  });
});

test('2 bytes (u0080 — u07ff)', () => {
  utf8byte2((str, bin) => {
    eq(utf8Length(str), bin.length);
  });
});

test('3 bytes (u0800 — uffff)', () => {
  utf8byte3((str, bin) => {
    eq(utf8Length(str), bin.length);
  });
});

test('4 bytes (u10000 — u10ffff)', () => {
  utf8byte4((str, bin) => {
    eq(utf8Length(str), bin.length);
  });
});
