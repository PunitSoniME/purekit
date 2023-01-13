import _intersection from 'lodash/intersection';
import { intersection } from '../../src/array';

const array1 = [2, 1];
const array2 = [2, 3];

describe('Array', () => {
	describe('intersection', () => {
		it('intersection(array1, array2)', () => {
			expect(intersection(array1, array2)).toEqual(
				_intersection(array1, array2)
			);
		});
	});
});
