import _lowerFirst from 'lodash/lowerFirst';
import { lowerFirst } from '../../src/string';

describe('String', () => {
	describe('lowerFirst', () => {
		it("lowerFirst('Fred')", () => {
			expect(lowerFirst('Fred')).toEqual(_lowerFirst('Fred'));
		});

		it("lowerFirst('FRED')", () => {
			expect(lowerFirst('FRED')).toEqual(_lowerFirst('FRED'));
		});

		it("lowerFirst('---FRED---')", () => {
			expect(lowerFirst('---FRED---')).toEqual(_lowerFirst('---FRED---'));
		});
	});
});
