/**
 * @jest-environment jsdom
 */
import _isArrayLikeObject from 'lodash/isArrayLikeObject';
import { isArrayLikeObject } from '../../src/lang';

describe('Lang', () => {
	describe('isArrayLikeObject', () => {
		it('isArrayLikeObject([1, 2, 3])', () => {
			expect(isArrayLikeObject([1, 2, 3])).toEqual(
				_isArrayLikeObject([1, 2, 3])
			);
		});

		it("isArrayLikeObject(document.body.children)", () => {
			expect(isArrayLikeObject(document.body.children)).toEqual(_isArrayLikeObject(document.body.children));
		});

		it("isArrayLikeObject('abc')", () => {
			expect(isArrayLikeObject('abc')).toEqual(_isArrayLikeObject('abc'));
		});
	});
});
