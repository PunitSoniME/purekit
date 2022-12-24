import { round as _round } from 'lodash';
import { round } from '../../src/math';

describe('Math', () => {
	describe('round', () => {
		it('round(4.006)', () => {
			expect(round(4.006)).toEqual(_round(4.006));
		});

		it('round(4.006, 2)', () => {
			expect(round(4.006, 2)).toEqual(_round(4.006, 2));
		});

		it('round(4060, -2)', () => {
			expect(round(4060, -2)).toEqual(_round(4060, -2));
		});
	});
});
