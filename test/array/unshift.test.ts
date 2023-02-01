import { unshift } from '../../src/array';

let array = [1, 2, 3, 4, 5];

describe('Array', () => {
	describe('unshift', () => {
		it('unshift(array, [6, 7])', () => {
			expect(unshift(array, [6, 7])).toEqual([6, 7, 1, 2, 3, 4, 5]);
		});

		it('unshift - array length', () => {
			expect(array.length).toEqual(7);
		});
	});
});
