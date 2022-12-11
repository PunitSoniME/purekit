import { sortedUniq as _sortedUniq } from 'lodash';
import { sortedUniq } from '../../src/array';

describe('Array', () => {
	describe('sortedUniq', () => {
		it('[Array Of numbers] It should return sorted uniq array', () => {
			expect(sortedUniq([1, 1, 2])).toEqual(_sortedUniq([1, 1, 2]));
		});
	});
});
