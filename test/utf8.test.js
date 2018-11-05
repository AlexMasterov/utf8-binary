'use strict';

const assert = require('assert');

const utf8toBin = require('../src/utf8ToBin');
const binToUtf8 = require('../src/binToUtf8');
const viewToUtf8 = require('../src/viewToUtf8');

const byte = (...bytes) => Buffer.from(bytes);
const stub = (name, value, bin) => ({ name, value, bin });

const stubs = [
  stub('1 byte (u0000)', '\u0000', byte(0x00)),
  stub('1 byte (u007f)', '\u007f', byte(0x7f)),
  stub('2 byte (u0080)', '\u0080', byte(0xc2, 0x80)),
  stub('2 byte (u07ff)', '\u07ff', byte(0xdf, 0xbf)),
  stub('3 byte (u0800)', '\u0800', byte(0xe0, 0xa0, 0x80)),
  stub('3 byte (uffff)', '\uffff', byte(0xef, 0xbf, 0xbf)),
  stub('4 byte (u10000)', '\u10000', byte(0xe1, 0x80, 0x80, 0x30)),
  stub('4 byte (u10ffff)', '\u10ffff', byte(0xe1, 0x83,0xbf, 0x66, 0x66)),
];

const test = desc => process =>
  describe(desc, () => stubs.forEach(({ name, value, bin }) =>
    it(name, () => process(value, bin))));

describe('utf8-bin', () => {
  test('utf8toBin')((value, bin) =>
    assert.deepStrictEqual(utf8toBin(value), bin.latin1Slice()));

  test('binToUtf8')((value, bin) =>
    assert.deepStrictEqual(binToUtf8(bin, 0, bin.length), value));

  test('viewToUtf8')((value, bin) => {
    const view = new DataView(bin.buffer, bin.byteOffset, bin.byteLength);
    assert.deepStrictEqual(viewToUtf8(view, 0, view.byteLength), value);
  });
});
