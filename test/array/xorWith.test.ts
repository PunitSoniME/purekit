import _xorWith from 'lodash/xorWith';
import _isEqual from 'lodash/isEqual';
import { isEqual } from '../../src/lang';
import { xorWith } from '../../src/array';

const objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
];
const others = [
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
];

describe('Array', () => {
	describe('xorWith', () => {
		it('xorWith(objects, others, _isEqual)', () => {
			expect(xorWith(objects, others, isEqual)).toEqual(
				_xorWith(objects, others, _isEqual)
			);
		});
	});
});
