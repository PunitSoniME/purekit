import { preventExtensions } from '../../src/collection';

let obj: any = { a: 1, b: 2 };
preventExtensions(obj);

describe('Object', () => {
	describe('preventExtensions', () => {
		it('preventExtensions(obj)', () => {
			expect(Object.isExtensible(obj)).toEqual(false);
		});

		it('preventExtensions > update property', () => {
			obj.b = 3;
			expect(obj.b).toEqual(3);
		});

		it('preventExtensions > remove property', () => {
			delete obj.b;
			expect(obj.b).toEqual(undefined);
		});

		it('preventExtensions > add new property', () => {
			try {
				obj.c = 100;
			} catch {
				expect(obj.c).toEqual(undefined);
			}
		});
	});
});
