import _toLower from 'lodash/toLower';
import { toLower } from '../../src/string';

describe('String', () => {
	describe('toLower', () => {
		it("toLower('--Foo-Bar--')", () => {
			expect(toLower('--Foo-Bar--')).toEqual(_toLower('--Foo-Bar--'));
		});

		it("toLower('fooBar')", () => {
			expect(toLower('fooBar')).toEqual(_toLower('fooBar'));
		});

		it("toLower('__FOO_BAR__')", () => {
			expect(toLower('__FOO_BAR__')).toEqual(_toLower('__FOO_BAR__'));
		});
	});
});
