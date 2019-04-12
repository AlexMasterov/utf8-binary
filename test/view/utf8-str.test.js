'use strict';

const viewUtf8ToStr = source('view/utf8-str');
const viewUtf8ToStrL = source('legacy/view/utf8-str');

const toView = (buf) =>
  new DataView(buf.buffer, buf.byteOffset, buf.byteLength);

suite('viewUtf8ToStr + legacy');

test('1 byte (u0000 — u007f)', () => {
  utf8byte1((str, bin, buf) => {
    const view = toView(buf);
    eq(viewUtf8ToStr(view), str);
    eq(viewUtf8ToStrL(view), str);
  });
});

test('2 bytes (u0080 — u07ff)', () => {
  utf8byte2((str, bin, buf) => {
    const view = toView(buf);
    eq(viewUtf8ToStr(view), str);
    eq(viewUtf8ToStrL(view), str);
  });
});

test('3 bytes (u0800 — uffff)', () => {
  utf8byte3((str, bin, buf) => {
    const view = toView(buf);
    eq(viewUtf8ToStr(view), str);
    eq(viewUtf8ToStrL(view), str);
  });
});

test('4 bytes (u10000 — u10ffff)', () => {
  utf8byte4((str, bin, buf) => {
    const view = toView(buf);
    eq(viewUtf8ToStr(view), str);
    eq(viewUtf8ToStrL(view), str);
  });
});
