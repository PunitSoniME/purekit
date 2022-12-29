import _isFinite from 'lodash/isFinite';
import { isFinite } from '../../src/lang';

describe('Lang', () => {
	describe('isFinite', () => {
		it('isFinite(3)', () => {
			expect(isFinite(3)).toEqual(_isFinite(3));
		});

		it('isFinite(Number.MIN_VALUE)', () => {
			expect(isFinite(Number.MIN_VALUE)).toEqual(_isFinite(Number.MIN_VALUE));
		});

		it('isFinite(Infinity)', () => {
			expect(isFinite(Infinity)).toEqual(_isFinite(Infinity));
		});

		it("isFinite('3')", () => {
			expect(isFinite('3')).toEqual(_isFinite('3'));
		});
	});
});
