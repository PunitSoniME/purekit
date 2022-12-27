import _repeat from 'lodash/repeat';
import { repeat } from '../../src/string';

describe('String', () => {
	describe('repeat', () => {
		it("repeat('*', 3)", () => {
			expect(repeat('*', 3)).toEqual(_repeat('*', 3));
		});

		it("repeat('abc', 2)", () => {
			expect(repeat('abc', 2)).toEqual(_repeat('abc', 2));
		});

		it("repeat('abc', 0)", () => {
			expect(repeat('abc', 0)).toEqual(_repeat('abc', 0));
		});
	});
});
