import _set from 'lodash/set';
import { set } from '../../src/object';

let object: Object;

describe('Object', () => {
	describe('set', () => {
		beforeEach(() => {
			object = { a: [{ bar: { c: 3 } }] };
		});

		it("set(object, 'a[0].bar.c', 4)", () => {
			expect(set(object, 'a[0].bar.c', 4)).toEqual(
				_set(object, 'a[0].bar.c', 4)
			);
		});

		it("set(object, ['x', '0', 'y', 'z'], 5)", () => {
			expect(set(object, ['x', '0', 'y', 'z'], 5)).toEqual(
				_set(object, ['x', '0', 'y', 'z'], 5)
			);
		});
	});
});
