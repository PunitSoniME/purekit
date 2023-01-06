import _at from 'lodash/at';
import { at } from '../../src/object';

const object = { a: [{ b: { c: 3 } }, 4] };

describe('Object', () => {
	describe('at', () => {
		it("at(object, ['a[0].b.c', 'a[1]'])", () => {
			expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual(
				_at(object, ['a[0].b.c', 'a[1]'])
			);
		});
	});
});
