import _isLength from 'lodash/isLength';
import { isLength } from '../../src/lang';

describe('Lang', () => {
	describe('isLength', () => {
		it('isLength(3)', () => {
			expect(isLength(3)).toEqual(_isLength(3));
		});

		it('isLength(Number.MIN_VALUE)', () => {
			expect(isLength(Number.MIN_VALUE)).toEqual(_isLength(Number.MIN_VALUE));
		});

		it('isLength(Infinity)', () => {
			expect(isLength(Infinity)).toEqual(_isLength(Infinity));
		});

		it("isLength('3')", () => {
			expect(isLength('3')).toEqual(_isLength('3'));
		});
	});
});
