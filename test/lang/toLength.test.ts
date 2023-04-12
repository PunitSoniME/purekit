import _toLength from 'lodash/toLength';
import { toLength } from '../../src/lang';

describe('Lang', () => {
	describe('toLength', () => {
		it('toLength(3.2)', () => {
			expect(toLength(3.2)).toEqual(_toLength(3.2));
		});

		it('toLength(Number.MIN_VALUE)', () => {
			expect(toLength(Number.MIN_VALUE)).toEqual(_toLength(Number.MIN_VALUE));
		});

		it('toLength(Infinity)', () => {
			expect(toLength(Infinity)).toEqual(_toLength(Infinity));
		});

		it("toLength('3.2')", () => {
			expect(toLength('3.2')).toEqual(_toLength('3.2'));
		});
	});
});
