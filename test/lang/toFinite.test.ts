import _toFinite from 'lodash/toFinite';
import toFinite from '../../src/lang/toFinite';

describe('Lang', () => {
	describe('toFinite', () => {
		it('toFinite(3.2)', () => {
			expect(toFinite(3.2)).toEqual(_toFinite(3.2));
		});

		it('toFinite(Number.MIN_VALUE)', () => {
			expect(toFinite(Number.MIN_VALUE)).toEqual(_toFinite(Number.MIN_VALUE));
		});

		it('toFinite(Infinity)', () => {
			expect(toFinite(Infinity)).toEqual(_toFinite(Infinity));
		});

		it("toFinite('3')", () => {
			expect(toFinite('3')).toEqual(_toFinite('3'));
		});
	});
});
