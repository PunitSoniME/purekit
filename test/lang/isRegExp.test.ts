import _isRegExp from 'lodash/isRegExp';
import { isRegExp } from '../../src/lang';

describe('Lang', () => {
	describe('isRegExp', () => {
		it('isRegExp(/abc/)', () => {
			expect(isRegExp(/abc/)).toEqual(_isRegExp(/abc/));
		});

		it("isRegExp('/abc/')", () => {
			expect(isRegExp('/abc/')).toEqual(_isRegExp('/abc/'));
		});
	});
});
