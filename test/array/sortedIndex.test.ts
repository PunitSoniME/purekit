import { sortedIndex as _sortedIndex } from 'lodash';
import { sortedIndex } from '../../src/array';

describe('Array', () => {
	describe('sortedIndex', () => {
		it('[Array Of numbers] It should return index based on passed value', () => {
			expect(sortedIndex([30, 50], 40)).toEqual(_sortedIndex([30, 50], 40));
		});

		it('[Array Of numbers] It should return index based on passed value', () => {
			expect(sortedIndex([30, 40, 50], 40)).toEqual(
				_sortedIndex([30, 40, 50], 40)
			);
		});
	});
});
