import _unionWith from 'lodash/unionWith';
import _isEqual from 'lodash/isEqual';
import { unionWith } from '../../src/array';
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
	describe('unionWith', () => {
		it('unionWith(objects, others, isEqual)', () => {
			expect(unionWith(objects, others, isEqual)).toEqual(
				_unionWith(objects, others, _isEqual)
			);
		});
	});
});
