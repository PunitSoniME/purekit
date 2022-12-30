import _isString from 'lodash/isString';
import { isString } from '../../src/lang';

describe('Lang', () => {
	describe('isString', () => {
		it("isString('abc')", () => {
			expect(isString('abc')).toEqual(_isString('abc'));
		});

		it('isString(1)', () => {
			expect(isString(1)).toEqual(_isString(1));
		});
	});
});
