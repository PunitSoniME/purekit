import _ceil from 'lodash/ceil';
import { ceil } from '../../src/math';

describe('Math', () => {
	describe('ceil', () => {
		it('ceil(4.006)', () => {
			expect(ceil(4.006)).toEqual(_ceil(4.006));
		});

		it('ceil(6.004, 2)', () => {
			expect(ceil(6.004, 2)).toEqual(_ceil(6.004, 2));
		});

		it('ceil(6040, -2)', () => {
			expect(ceil(6040, -2)).toEqual(_ceil(6040, -2));
		});
	});
});
