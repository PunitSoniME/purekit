import { freeze } from '../../src/collection';

let obj: any = { a: 1, b: 2 };
freeze(obj);

describe('Object', () => {
	describe('freeze', () => {
		it('freeze(obj)', () => {
			expect(Object.isFrozen(obj)).toEqual(true);
		});

		it('freeze > update property', () => {
			try {
				obj.b = 3;
			} catch {
				expect(obj.b).toEqual(2);
			}
		});

		it('freeze > remove property', () => {
			try {
				delete obj.b;
			} catch {
				expect(obj.b).toEqual(2);
			}
		});

		it('freeze > add new property', () => {
			try {
				obj.c = 12;
			} catch {
				expect(obj.c).toEqual(undefined);
			}
		});
	});
});
