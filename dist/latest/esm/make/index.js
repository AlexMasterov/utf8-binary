const chr = String.fromCharCode;

const cpr = String.fromCodePoint;

const pushEmpty = (arr, start, end) => {
  while (start < end) arr[start++] = '';
};

const pushChr1 = (arr, i = 0) => {
  while (i < 257) arr[i] = chr(i & 0xff), i++;
};

const pushUtf2 = (arr, i = 0) => {
  while (i < 2048) {
    arr[i] = chr(
      0xc0 | i >> 6 & 0x1f,
      0x80 | i & 0x3f);
    i++;
  }
};

const makeChr1Str = (i = 0, str = '') => {
  while (i < 257) str += chr(i & 0xff), i++;
};

export { chr, cpr, makeChr1Str, pushChr1, pushEmpty, pushUtf2 };
