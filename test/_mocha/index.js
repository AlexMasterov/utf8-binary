'use strict';

const { strictEqual: eq } = require('assert').strict || require('assert');
const {
  utf8byte1,
  utf8byte2,
  utf8byte3,
  utf8byte4,
} = require('./utf8');

const makeSource = (srcPath) =>
    (modulePath) => require(`${srcPath}/${modulePath}`);

global.eq = eq;

// utf8
global.utf8byte1 = utf8byte1;
global.utf8byte2 = utf8byte2;
global.utf8byte3 = utf8byte3;
global.utf8byte4 = utf8byte4;

global.source = makeSource('../../src');
