import _toInteger from 'lodash/toInteger';
import { toInteger } from '../../src/lang';

describe('Lang', () => {
	describe('toInteger', () => {
		it('toInteger(3.2)', () => {
			expect(toInteger(3.2)).toEqual(_toInteger(3.2));
		});

		it('toInteger(Number.MIN_VALUE)', () => {
			expect(toInteger(Number.MIN_VALUE)).toEqual(_toInteger(Number.MIN_VALUE));
		});

		it('toInteger(Infinity)', () => {
			expect(toInteger(Infinity)).toEqual(_toInteger(Infinity));
		});

		it("toInteger('3.2')", () => {
			expect(toInteger('3.2')).toEqual(_toInteger('3.2'));
		});
	});
});
