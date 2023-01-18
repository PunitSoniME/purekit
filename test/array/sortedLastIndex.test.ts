import _sortedLastIndex from 'lodash/sortedLastIndex';
import { sortedLastIndex } from '../../src/array';

describe('Array', () => {
	describe('sortedLastIndex', () => {
		it('sortedLastIndex([4, 5, 5, 5, 6], 5)', () => {
			expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toEqual(
				_sortedLastIndex([4, 5, 5, 5, 6], 5)
			);
		});
	});
});
