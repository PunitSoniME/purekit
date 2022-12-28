import _gt from 'lodash/gt';
import { gt } from '../../src/lang';

describe('Lang', () => {
	describe('gt', () => {
		it('gt(3, 1)', () => {
			expect(gt(3, 1)).toEqual(_gt(3, 1));
		});

		it('gt(3, 3)', () => {
			expect(gt(3, 3)).toEqual(_gt(3, 3));
		});

		it('gt(1, 3)', () => {
			expect(gt(1, 3)).toEqual(_gt(1, 3));
		});
	});
});
