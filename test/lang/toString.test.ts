import _toString from 'lodash/toString';
import { toString } from '../../src/lang';

describe('Lang', () => {
	describe('toString', () => {
		it('toString(null)', () => {
			expect(toString(null)).toEqual(_toString(null));
		});

		it('toString(-0)', () => {
			expect(toString(-0)).toEqual(_toString(-0));
		});

		it('toString([1, 2, 3])', () => {
			expect(toString([1, 2, 3])).toEqual(_toString([1, 2, 3]));
		});
	});
});
