import _update from 'lodash/update';
import { update } from '../../src/object';

let object: any;

describe('Object', () => {
	describe('update', () => {
		beforeEach(() => {
			object = { a: [{ b: { c: 3 } }] };
		});

		it("update(object, 'a[0].b.c', (n: number) => n * n)", () => {
			const predicate = (n: number) => n * n;
			expect(update(object, 'a[0].b.c', predicate)).toEqual(
				_update(object, 'a[0].b.c', predicate)
			);
		});

		it("update(object, 'a[0].y.z', (n: number) => n ? n + 1 : 0)", () => {
			const predicate = (n: number) => (n ? n + 1 : 0);
			expect(update(object, 'a[0].y.z', predicate)).toEqual(
				_update(object, 'a[0].y.x', predicate)
			);
		});
	});
});
