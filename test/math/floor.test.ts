import _floor from 'lodash/floor';
import { floor } from '../../src/math';

describe('Math', () => {
	describe('floor', () => {
		it('floor(4.006)', () => {
			expect(floor(4.006)).toEqual(_floor(4.006));
		});

		it('floor(0.046, 2)', () => {
			expect(floor(0.046, 2)).toEqual(_floor(0.046, 2));
		});

		it('floor(4060, -2)', () => {
			expect(floor(4060, -2)).toEqual(_floor(4060, -2));
		});
	});
});
