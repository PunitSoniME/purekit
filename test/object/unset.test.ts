import _unset from 'lodash/unset';
import { unset } from '../../src/object';

const object = { a: [{ b: { c: 7 } }] };

describe('Object', () => {
	describe('unset', () => {
		it("unset(object, 'a[0].b.c')", () => {
			expect(unset(object, 'a[0].b.c')).toEqual(_unset(object, 'a[0].b.c'));
		});
	});
});
