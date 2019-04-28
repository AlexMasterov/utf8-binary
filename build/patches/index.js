'use strict';

module.exports = class Patches {
  static get toBrowser() { return require('./toBrowser'); }
  static get toES6Module() { return require('./toES6Module'); }
};

