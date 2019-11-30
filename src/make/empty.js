'use strict';

const pushEmpty = (arr, start, end) => {
  while (start < end) {
    arr[start++] = null;
  }
};

module.exports = pushEmpty;
