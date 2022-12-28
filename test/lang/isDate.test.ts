import _isDate from 'lodash/isDate';
import { isDate } from '../../src/lang';

describe('Lang', () => {
	describe('isDate', () => {
		it('isDate(new Date)', () => {
			expect(isDate(new Date)).toEqual(_isDate(new Date));
		});

		it("isDate('Mon April 23 2012')", () => {
			expect(isDate('Mon April 23 2012')).toEqual(_isDate('Mon April 23 2012'));
		});

	});
});
