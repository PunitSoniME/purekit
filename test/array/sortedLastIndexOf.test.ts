import _sortedLastIndexOf from 'lodash/sortedLastIndexOf';
import { sortedLastIndexOf } from '../../src/array';

describe('Array', () => {
	describe('sortedLastIndexOf', () => {
		it('[4, 5, 5, 5, 6], 5', () => {
			expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toEqual(
				_sortedLastIndexOf([4, 5, 5, 5, 6], 5)
			);
		});
	});
});
