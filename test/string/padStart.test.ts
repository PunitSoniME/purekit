import _padStart from 'lodash/padStart';
import { padStart } from '../../src/string';

describe('String', () => {
	describe('padStart', () => {
		it("padStart('abc', 6)", () => {
			expect(padStart('abc', 6)).toEqual(_padStart('abc', 6));
		});

		it("padStart('abc', 6, '_-')", () => {
			expect(padStart('abc', 6, '_-')).toEqual(_padStart('abc', 6, '_-'));
		});

		it("padStart('abc', 3)", () => {
			expect(padStart('abc', 3)).toEqual(_padStart('abc', 3));
		});
	});
});
