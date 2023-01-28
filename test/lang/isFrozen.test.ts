import { freeze } from '../../src/collection';
import { isFrozen } from '../../src/lang';

let obj: any = { a: 1, b: 2 };

describe('Lang', () => {
	describe('isFrozen', () => {
		it('isFrozen(obj) - should not be frozen', () => {
			expect(isFrozen(obj)).toEqual(false);
		});

		it('isFrozen(obj) - should be frozen', () => {
			freeze(obj);
			expect(isFrozen(obj)).toEqual(true);
		});
	});
});
