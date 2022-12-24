import { castArray as _castArray } from 'lodash';
import { castArray } from '../../src/lang';

describe('Lang', () => {
	describe('castArray', () => {
		it('castArray(1)', () => {
			expect(castArray(1)).toEqual(_castArray(1));
		});

		it("castArray({ 'a': 1 })", () => {
			expect(castArray({ a: 1 })).toEqual(_castArray({ a: 1 }));
		});

		it('castArray("abc")', () => {
			expect(castArray('abc')).toEqual(_castArray('abc'));
		});

		it('castArray(null)', () => {
			expect(castArray(null)).toEqual(_castArray(null));
		});

		it('castArray(undefined)', () => {
			expect(castArray(undefined)).toEqual(_castArray(undefined));
		});

		it('castArray([1, 2, 3])', () => {
			const array = [1, 2, 3];
			expect(castArray(array) === array).toEqual(_castArray(array) === array);
		});
	});
});
