import _lowerCase from 'lodash/lowerCase';
import { lowerCase } from '../../src/string';

describe('String', () => {
	describe('lowerCase', () => {
		it("lowerCase('--Foo-Bar--')", () => {
			expect(lowerCase('--Foo-Bar--')).toEqual(_lowerCase('--Foo-Bar--'));
		});

		it("lowerCase('fooBar')", () => {
			expect(lowerCase('fooBar')).toEqual(_lowerCase('fooBar'));
		});

		it("lowerCase('__FOO_BAR__')", () => {
			expect(lowerCase('__FOO_BAR__')).toEqual(_lowerCase('__FOO_BAR__'));
		});
	});
});
