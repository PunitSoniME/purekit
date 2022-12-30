import _isSafeInteger from 'lodash/isSafeInteger';
import { isSafeInteger } from '../../src/lang';

describe('Lang', () => {
	describe('isSafeInteger', () => {
		it('isSafeInteger(3)', () => {
			expect(isSafeInteger(3)).toEqual(_isSafeInteger(3));
		});

		it('isSafeInteger(Number.MIN_VALUE)', () => {
			expect(isSafeInteger(Number.MIN_VALUE)).toEqual(
				_isSafeInteger(Number.MIN_VALUE)
			);
		});

		it('isSafeInteger(Infinity)', () => {
			expect(isSafeInteger(Infinity)).toEqual(_isSafeInteger(Infinity));
		});

		it("isSafeInteger('3')", () => {
			expect(isSafeInteger('3')).toEqual(_isSafeInteger('3'));
		});

		it('isSafeInteger(Number.MAX_SAFE_INTEGER)', () => {
			expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toEqual(
				_isSafeInteger(Number.MAX_SAFE_INTEGER)
			);
		});
	});
});
