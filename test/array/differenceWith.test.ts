import _differenceWith from 'lodash/differenceWith';
import _isEqual from 'lodash/isEqual';
import { differenceWith } from '../../src/array';
import { isEqual } from '../../src/lang';

const data1 = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
];
const data2 = [{ x: 1, y: 2 }];

describe('Array', () => {
	describe('differenceWith', () => {
		it('differenceWith(data1, data2, isEqual)', () => {
			expect(differenceWith(data1, data2, isEqual)).toEqual(
				_differenceWith(data1, data2, _isEqual)
			);
		});
	});
});
