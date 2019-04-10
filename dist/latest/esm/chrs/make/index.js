import { makeChr1Str, pushChr1, pushEmpty, pushUtf2 } from '../../make/index.js';

const chr1Str = makeChr1Str();

const chr1 = [];
pushChr1(chr1);

const chrUtf2 = [];

pushEmpty(chrUtf2, 0, 127);
pushUtf2(chrUtf2, 127);

export { chr1, chr1Str, chrUtf2 };
