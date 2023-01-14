import _difference from 'lodash/difference';
import { difference } from '../../src/array';

describe('Array', () => {
	describe('difference', () => {
		it('difference([2, 1, 4], [2, 3])', () => {
			expect(difference([2, 1, 4], [2, 3])).toEqual(
				_difference([2, 1, 4], [2, 3])
			);
		});

		it('difference([2, 1, 4], [2, 3], [3])', () => {
			expect(difference([2, 1, 4], [2, 3], [3])).toEqual(
				_difference([2, 1, 4], [2, 3], [3])
			);
		});

		it('[NULL] It should return an empty array', () => {
			expect(difference(null)).toEqual([]);
		});
	});
});
