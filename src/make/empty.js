'use strict';

const pushEmpty = (arr, start, end) => {
  while (start < end) arr[start++] = '';
};

module.exports = pushEmpty;
