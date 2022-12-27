import _upperCase from 'lodash/upperCase';
import { upperCase } from '../../src/string';

describe('String', () => {
	describe('upperCase', () => {
		it("upperCase('--foo-bar')", () => {
			expect(upperCase('--foo-bar')).toEqual(_upperCase('--foo-bar'));
		});

		it("upperCase('fooBar')", () => {
			expect(upperCase('fooBar')).toEqual(_upperCase('fooBar'));
		});

		it("upperCase('__foo_bar__')", () => {
			expect(upperCase('__foo_bar__')).toEqual(_upperCase('__foo_bar__'));
		});
	});
});
