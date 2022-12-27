import _snakeCase from 'lodash/snakeCase';
import { snakeCase } from '../../src/string';

describe('String', () => {
	describe('snakeCase', () => {
		it("snakeCase('Foo Bar')", () => {
			expect(snakeCase('Foo Bar')).toEqual(_snakeCase('Foo Bar'));
		});

		it("snakeCase('fooBar')", () => {
			expect(snakeCase('fooBar')).toEqual(_snakeCase('fooBar'));
		});

		it("snakeCase('--FOO-BAR--')", () => {
			expect(snakeCase('--FOO-BAR--')).toEqual(_snakeCase('--FOO-BAR--'));
		});
	});
});
