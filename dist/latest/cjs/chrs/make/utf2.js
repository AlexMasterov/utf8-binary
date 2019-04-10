'use strict';

const { pushEmpty, pushUtf2 } = require('../../make');

const chrUtf2 = [];

pushEmpty(chrUtf2, 0, 127);
pushUtf2(chrUtf2, 127);

module.exports = chrUtf2;
