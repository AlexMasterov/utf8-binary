'use strict';

const { indexPatch } = require('./node');

module.exports = {
  ...indexPatch('src/'),
};
