import _isSymbol from 'lodash/isSymbol';
import { isSymbol } from '../../src/lang';

describe('Lang', () => {
	describe('isSymbol', () => {
		it('isSymbol(Symbol.iterator)', () => {
			expect(isSymbol(Symbol.iterator)).toEqual(_isSymbol(Symbol.iterator));
		});

		it("isSymbol('abc')", () => {
			expect(isSymbol('abc')).toEqual(_isSymbol('abc'));
		});
	});
});
