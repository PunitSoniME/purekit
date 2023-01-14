import _intersectionWith from 'lodash/intersectionWith';
import _isEqual from 'lodash/isEqual';
import { intersectionWith } from '../../src/array';
import { isEqual } from '../../src/lang';

const objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
];
const others = [
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
];

describe('Array', () => {
	describe('intersectionWith', () => {
		it('intersectionWith(objects, others, isEqual)', () => {
			expect(intersectionWith(objects, others, isEqual)).toEqual(
				_intersectionWith(objects, others, _isEqual)
			);
		});
	});
});
