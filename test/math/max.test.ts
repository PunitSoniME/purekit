import { max as _max } from 'lodash';
import { max } from '../../src/math';

describe('Math', () => {
	describe('max', () => {
		it('max(numbers)', () => {
			const numbers = [4, 2, 8, 6];
			expect(max(numbers)).toEqual(_max(numbers));
		});

		it('max([])', () => {
			expect(max([])).toEqual(_max([]));
		});
	});
});
