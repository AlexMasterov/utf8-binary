'use strict';

const { pushEmpty, pushChr2 } = require('../../make');

const chr2 = [];

pushEmpty(chr2, 0, 127);
pushChr2(chr2, 127);

module.exports = chr2;
