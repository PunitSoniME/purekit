import _isNumber from 'lodash/isNumber';
import { isNumber } from '../../src/lang';

describe('Lang', () => {
	describe('isNumber', () => {
		it('isNumber(3)', () => {
			expect(isNumber(3)).toEqual(_isNumber(3));
		});

		it('isNumber(Number.MIN_VALUE)', () => {
			expect(isNumber(Number.MIN_VALUE)).toEqual(_isNumber(Number.MIN_VALUE));
		});

		it('isNumber(Infinity)', () => {
			expect(isNumber(Infinity)).toEqual(_isNumber(Infinity));
		});

		it("isNumber('3')", () => {
			expect(isNumber('3')).toEqual(_isNumber('3'));
		});

		it('isNumber(Number.MAX_SAFE_INTEGER)', () => {
			expect(isNumber(Number.MAX_SAFE_INTEGER)).toEqual(
				_isNumber(Number.MAX_SAFE_INTEGER)
			);
		});
	});
});
