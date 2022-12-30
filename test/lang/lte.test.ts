import _lte from 'lodash/lte';
import { lte } from '../../src/lang';

describe('Lang', () => {
	describe('lte', () => {
		it('lte(3, 1)', () => {
			expect(lte(3, 1)).toEqual(_lte(3, 1));
		});

		it('lte(3, 3)', () => {
			expect(lte(3, 3)).toEqual(_lte(3, 3));
		});

		it('lte(1, 3)', () => {
			expect(lte(1, 3)).toEqual(_lte(1, 3));
		});
	});
});
