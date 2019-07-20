'use strict';

const toBin = (buf) => buf.latin1Slice(0, buf.length);
const toUint8 = (buf) => new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
const toUtf8 = (buf) => buf.utf8Slice(0, buf.length);
const toView = (buf) => new DataView(buf.buffer, buf.byteOffset, buf.byteLength);

module.exports = {
  toBin,
  toUint8,
  toUtf8,
  toView,
};
