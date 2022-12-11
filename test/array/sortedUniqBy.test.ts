import { sortedUniqBy as _sortedUniqBy } from 'lodash';
import { sortedUniqBy } from '../../src/array';

describe('Array', () => {
	describe('sortedUniqBy', () => {
		it('[Array Of numbers] It should return sorted uniq array by passed predicate', () => {
			expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual(
				_sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
			);
		});
	});
});
