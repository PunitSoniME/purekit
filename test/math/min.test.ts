import _min from 'lodash/min';
import { min } from '../../src/math';

describe('Math', () => {
	describe('max', () => {
		it('min(numbers)', () => {
			const numbers = [4, 2, 8, 6];
			expect(min(numbers)).toEqual(_min(numbers));
		});

		it('min([])', () => {
			expect(min([])).toEqual(_min([]));
		});
	});
});
