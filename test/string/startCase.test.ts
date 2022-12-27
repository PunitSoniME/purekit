import _startCase from 'lodash/startCase';
import { startCase } from '../../src/string';

describe('String', () => {
	describe('startCase', () => {
		it("startCase('--foo-bar--')", () => {
			expect(startCase('--foo-bar--')).toEqual(_startCase('--foo-bar--'));
		});

		it("startCase('fooBar')", () => {
			expect(startCase('fooBar')).toEqual(_startCase('fooBar'));
		});

		it("startCase('__FOO_BAR__')", () => {
			expect(startCase('__FOO_BAR__')).toEqual(_startCase('__FOO_BAR__'));
		});
	});
});
