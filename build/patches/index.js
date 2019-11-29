'use strict';

module.exports = {
  get toBrowser() { return require('./toBrowser'); },
  get toES6Module() { return require('./toES6Module'); },
};
