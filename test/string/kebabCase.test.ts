import { kebabCase as _kebabCase } from 'lodash';
import { kebabCase } from '../../src/string';

describe('String', () => {
	describe('kebabCase', () => {
		it("kebabCase('Foo Bar')", () => {
			expect(kebabCase('Foo Bar')).toEqual(_kebabCase('Foo Bar'));
		});

		it("kebabCase('fooBar')", () => {
			expect(kebabCase('fooBar')).toEqual(_kebabCase('fooBar'));
		});

		it("kebabCase('__FOO_BAR__')", () => {
			expect(kebabCase('__FOO_BAR__')).toEqual(_kebabCase('__FOO_BAR__'));
		});
	});
});
