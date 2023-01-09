import _isArrayLike from 'lodash/isArrayLike';
import { isArrayLike } from '../../src/lang';

describe('Lang', () => {
	describe('isArrayLike', () => {
		it('isArrayLike([1, 2, 3])', () => {
			expect(isArrayLike([1, 2, 3])).toEqual(_isArrayLike([1, 2, 3]));
		});

		it('isArrayLikeObject(undefined)', () => {
			expect(isArrayLike(undefined)).toEqual(_isArrayLike(undefined));
		});

		it("isArrayLikeObject('abc')", () => {
			expect(isArrayLike('abc')).toEqual(_isArrayLike('abc'));
		});
	});
});
