import _pad from 'lodash/pad';
import { pad } from '../../src/string';

describe('String', () => {
	describe('pad', () => {
		it("pad('abc', 8)", () => {
			expect(pad('abc', 8)).toEqual(_pad('abc', 8));
		});

		it("pad('abc', 8, '_-')", () => {
			expect(pad('abc', 8, '_-')).toEqual(_pad('abc', 8, '_-'));
		});

		it("pad('abc', 3)", () => {
			expect(pad('abc', 3)).toEqual(_pad('abc', 3));
		});
	});
});
