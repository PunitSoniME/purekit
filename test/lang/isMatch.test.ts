import _isMatch from 'lodash/isMatch';
import { isMatch } from '../../src/lang';

const object = { a: 1, b: 2 };

describe('Lang', () => {
	describe('isMatch', () => {
		it("isMatch(object, { 'b': 2 })", () => {
			expect(isMatch(object, { b: 2 })).toEqual(_isMatch(object, { b: 2 }));
		});

		it("isMatch(object, { 'b': 1 })", () => {
			expect(isMatch(object, { b: 1 })).toEqual(_isMatch(object, { b: 1 }));
		});
	});
});
