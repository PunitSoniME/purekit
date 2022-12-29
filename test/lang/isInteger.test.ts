import _isInteger from 'lodash/isInteger';
import { isInteger } from '../../src/lang';

describe('Lang', () => {
	describe('isInteger', () => {
		it('isInteger(3)', () => {
			expect(isInteger(3)).toEqual(_isInteger(3));
		});

		it('isInteger(Number.MIN_VALUE)', () => {
			expect(isInteger(Number.MIN_VALUE)).toEqual(_isInteger(Number.MIN_VALUE));
		});

		it('isInteger(Infinity)', () => {
			expect(isInteger(Infinity)).toEqual(_isInteger(Infinity));
		});

		it("isInteger('3')", () => {
			expect(isInteger('3')).toEqual(_isInteger('3'));
		});

		it('isInteger(Number.MAX_SAFE_INTEGER)', () => {
			expect(isInteger(Number.MAX_SAFE_INTEGER)).toEqual(_isInteger(Number.MAX_SAFE_INTEGER));
		});
	});
});
