import { add } from '../../src/maths';

describe('Maths', () => {
	describe('add', () => {
		it('[Array Of Number] It should sum of data', () => {
			expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55);
		});
	});
});
