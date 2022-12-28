import _isArray from 'lodash/isArray';
import { isArray } from '../../src/lang';

describe('Lang', () => {
	describe('isArray', () => {
		it('isArray([1, 2, 3])', () => {
			expect(isArray([1, 2, 3])).toEqual(_isArray([1, 2, 3]));
		});

		// it('isArray(document.body.children)', () => {
		// 	expect(isArray(document.body.children)).toEqual(_isArray(document.body.children));
		// });

		it("isArray('abc')", () => {
			expect(isArray('abc')).toEqual(_isArray('abc'));
		});
	});
});
