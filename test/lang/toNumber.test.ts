import _toNumber from 'lodash/toNumber';
import { toNumber } from '../../src/lang';

describe('Lang', () => {
	describe('toNumber', () => {
		it('toNumber(3.2)', () => {
			expect(toNumber(3.2)).toEqual(_toNumber(3.2));
		});

		it('toNumber(Number.MIN_VALUE)', () => {
			expect(toNumber(Number.MIN_VALUE)).toEqual(_toNumber(Number.MIN_VALUE));
		});

		it('toNumber(Infinity)', () => {
			expect(toNumber(Infinity)).toEqual(_toNumber(Infinity));
		});

		it("toNumber('3.2')", () => {
			expect(toNumber('3.2')).toEqual(_toNumber('3.2'));
		});
	});
});
