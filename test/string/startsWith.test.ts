import _startsWith from 'lodash/startsWith';
import { startsWith } from '../../src/string';

describe('String', () => {
	describe('startsWith', () => {
		it("startsWith('abc', 'a')", () => {
			expect(startsWith('abc', 'a')).toEqual(_startsWith('abc', 'a'));
		});

		it("startsWith('abc', 'b')", () => {
			expect(startsWith('abc', 'b')).toEqual(_startsWith('abc', 'b'));
		});

		it("startsWith('abc', 'b', 1)", () => {
			expect(startsWith('abc', 'b', 1)).toEqual(_startsWith('abc', 'b', 1));
		});
	});
});
