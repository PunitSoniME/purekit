import _toSafeInteger from 'lodash/toSafeInteger';
import { toSafeInteger } from '../../src/lang';

describe('Lang', () => {
	describe('toSafeInteger', () => {
		it('toSafeInteger(3.2)', () => {
			expect(toSafeInteger(3.2)).toEqual(_toSafeInteger(3.2));
		});

		it('toSafeInteger(Number.MIN_VALUE)', () => {
			expect(toSafeInteger(Number.MIN_VALUE)).toEqual(
				_toSafeInteger(Number.MIN_VALUE)
			);
		});

		it('toSafeInteger(Infinity)', () => {
			expect(toSafeInteger(Infinity)).toEqual(_toSafeInteger(Infinity));
		});

		it("toSafeInteger('3.2')", () => {
			expect(toSafeInteger('3.2')).toEqual(_toSafeInteger('3.2'));
		});
	});
});
