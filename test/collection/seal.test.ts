import { seal } from '../../src/collection';

let obj: any = { a: 1, b: 2 };
seal(obj);

describe('Object', () => {
	describe('seal', () => {
		it('seal(obj)', () => {
			expect(Object.isSealed(obj)).toEqual(true);
		});

		it('seal > update property', () => {
			obj.b = 3;
			expect(obj.b).toEqual(3);
		});

		it('seal > remove property', () => {
			try {
				delete obj.b;
			} catch {
				expect(obj.b).not.toEqual(undefined);
			}
		});

		it('seal > add new property', () => {
			try {
				obj.c = 100;
			} catch {
				expect(obj.c).toEqual(undefined);
			}
		});
	});
});
