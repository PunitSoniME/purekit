import { subtract as _subtract } from 'lodash';
import { subtract } from '../../src/math';

describe('Math', () => {
	describe('subtract', () => {
		it('subtract(6, 4)', () => {
			expect(subtract(6, 4)).toEqual(_subtract(6, 4));
		});

		it('subtract(6, -4)', () => {
			expect(subtract(6, -4)).toEqual(_subtract(6, -4));
		});

		it('subtract(-6, -4)', () => {
			expect(subtract(-6, -4)).toEqual(_subtract(-6, -4));
		});
	});
});
