import _upperFirst from 'lodash/upperFirst';
import { upperFirst } from '../../src/string';

describe('String', () => {
	describe('upperFirst', () => {
		it("upperFirst('fred')", () => {
			expect(upperFirst('fred')).toEqual(_upperFirst('fred'));
		});

		it("upperFirst('FRED')", () => {
			expect(upperFirst('FRED')).toEqual(_upperFirst('FRED'));
		});
	});
});
