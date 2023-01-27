import { seal } from '../../src/collection';
import { isSealed } from '../../src/lang';

let obj: any = { a: 1, b: 2 };

describe('Lang', () => {
	describe('isSealed', () => {
		it('isSealed(obj) - should not be sealed', () => {
			expect(isSealed(obj)).toEqual(false);
		});

		it('isSealed(obj) - should be sealed', () => {
			seal(obj);
			expect(isSealed(obj)).toEqual(true);
		});
	});
});
