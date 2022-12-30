import _isObject from 'lodash/isObject';
import { isObject } from '../../src/lang';

describe('Lang', () => {
	describe('isObject', () => {
		it('isObject({})', () => {
			expect(isObject({})).toEqual(_isObject({}));
		});

		it('isObject([1, 2, 3])', () => {
			expect(isObject([1, 2, 3])).toEqual(_isObject([1, 2, 3]));
		});

		it('isObject(null)', () => {
			expect(isObject(null)).toEqual(_isObject(null));
		});
	});
});
