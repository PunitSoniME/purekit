import _endsWith from 'lodash/endsWith';
import { endsWith } from '../../src/string';

describe('String', () => {
	describe('endsWith', () => {
		it("endsWith('abc', 'c')", () => {
			expect(endsWith('abc', 'c')).toEqual(_endsWith('abc', 'c'));
		});

		it("endsWith('abc', 'b')", () => {
			expect(endsWith('abc', 'b')).toEqual(_endsWith('abc', 'b'));
		});

		it("endsWith('abc', 'b', 2)", () => {
			expect(endsWith('abc', 'b', 2)).toEqual(_endsWith('abc', 'b', 2));
		});
	});
});
