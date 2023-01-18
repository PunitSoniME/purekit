import _sortedIndexOf from 'lodash/sortedIndexOf';
import { sortedIndexOf } from '../../src/array';

describe('Array', () => {
	describe('sortedIndexOf', () => {
		it('sortedIndexOf([4, 5, 5, 5, 6], 5)', () => {
			expect(sortedIndexOf([4, 5, 5, 5, 6], 5)).toEqual(
				_sortedIndexOf([4, 5, 5, 5, 6], 5)
			);
		});
	});
});
