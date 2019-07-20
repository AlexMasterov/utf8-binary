'use strict';

const {
  strictEqual: eq,
  deepStrictEqual: same,
} = require('assert').strict || require('assert');
const { eachByte } = require('./each');
const {
  toBin,
  toUint8,
  toUtf8,
  toView,
} = require('./to');
const {
  utf8byte1,
  utf8byte2,
  utf8byte3,
  utf8byte4,
} = require('../stub');

const makeSource = (srcPath) =>
    (modulePath) => require(`${srcPath}/${modulePath}`);

global.source = makeSource('../../src');

// asserts
global.eq = eq;
global.same = same;

// utils
global.eachByte = eachByte;

global.toBin = toBin;
global.toUint8 = toUint8;
global.toUtf8 = toUtf8;
global.toView = toView;

// stubs (utf8)
global.utf8byte1 = utf8byte1;
global.utf8byte2 = utf8byte2;
global.utf8byte3 = utf8byte3;
global.utf8byte4 = utf8byte4;
