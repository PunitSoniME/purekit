import { degreesToRads } from '../../src/math';

describe('Math', () => {
	describe('degreesToRads', () => {
		it('degreesToRads(90)', () => {
			expect(degreesToRads(90)).toEqual(1.5707963267948966);
		});

		it('degreesToRads(180)', () => {
			expect(degreesToRads(180)).toEqual(3.141592653589793);
		});
	});
});
