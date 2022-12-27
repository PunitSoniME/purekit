import _camelCase from 'lodash/camelCase';
import { camelCase } from '../../src/string';

describe('String', () => {
	describe('camelCase', () => {
		it('camelCase("Foo Bar")', () => {
			const str = 'Foo Bar';
			expect(camelCase(str)).toEqual(_camelCase(str));
		});

		it('camelCase("--foo-bar--")', () => {
			const str = '--foo-bar--';
			expect(camelCase(str)).toEqual(_camelCase(str));
		});

		it('camelCase("__FOO_BAR__")', () => {
			const str = '__FOO_BAR__';
			expect(camelCase(str)).toEqual(_camelCase(str));
		});
	});
});
