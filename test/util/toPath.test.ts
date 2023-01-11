import { toPath as _toPath } from 'lodash';
import { toPath } from '../../src/util';

describe('Util', () => {
	describe('toPath', () => {
		it("toPath('a.b.c')", () => {
			expect(toPath('a.b.c')).toEqual(_toPath('a.b.c'));
		});

		it("toPath('a[0].b.c')", () => {
			expect(toPath('a[0].b.c')).toEqual(_toPath('a[0].b.c'));
		});
	});
});
