import { difference } from '../../src/array';

describe('Array', () => {
	describe('difference', () => {
		it('[Array Of Number] It should return the difference', () => {
			expect(difference([2, 1], [2, 3])).toEqual([1]);
		});
	});
});
