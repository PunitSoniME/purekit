import _isNaN from 'lodash/isNaN';
import { isNaN } from '../../src/lang';

describe('Lang', () => {
	describe('isNaN', () => {
		it('isNaN(NaN)', () => {
			expect(isNaN(NaN)).toEqual(_isNaN(NaN));
		});

		it('isNaN(new Number(NaN))', () => {
			expect(isNaN(new Number(NaN))).toEqual(_isNaN(new Number(NaN)));
		});

		it('isNaN(undefined)', () => {
			expect(isNaN(undefined)).toEqual(_isNaN(undefined));
		});
	});
});
