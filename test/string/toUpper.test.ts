import _toUpper from 'lodash/toUpper';
import { toUpper } from '../../src/string';

describe('String', () => {
	describe('toUpper', () => {
		it("toUpper('--Foo-Bar--')", () => {
			expect(toUpper('--Foo-Bar--')).toEqual(_toUpper('--Foo-Bar--'));
		});

		it("toUpper('fooBar')", () => {
			expect(toUpper('fooBar')).toEqual(_toUpper('fooBar'));
		});

		it("toUpper('__FOO_BAR__')", () => {
			expect(toUpper('__FOO_BAR__')).toEqual(_toUpper('__FOO_BAR__'));
		});
	});
});
