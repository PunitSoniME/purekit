import { difference as _difference } from 'lodash';
import { difference } from '../../src/array';

describe('Array', () => {
	describe('difference', () => {
		const collection = [[1], 2, [3], [[4]], 5];

		it('[Array Of Number] It should return the difference', () => {
			expect(difference(collection)).toEqual(_difference(collection));
		});

		it('[NULL] It should return an empty array', () => {
			expect(difference(null)).toEqual([]);
		});
	});
});
