import { padEnd as _padEnd } from 'lodash';
import { padEnd } from '../../src/string';

describe('String', () => {
	describe('padEnd', () => {
		it("padEnd('abc', 6)", () => {
			expect(padEnd('abc', 6)).toEqual(_padEnd('abc', 6));
		});

		it("padEnd('abc', 6, '_-')", () => {
			expect(padEnd('abc', 6, '_-')).toEqual(_padEnd('abc', 6, '_-'));
		});

		it("padEnd('abc', 3)", () => {
			expect(padEnd('abc', 3)).toEqual(_padEnd('abc', 3));
		});
	});
});
