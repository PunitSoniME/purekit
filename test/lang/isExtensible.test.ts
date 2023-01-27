import { preventExtensions } from '../../src/collection';
import { isExtensible } from '../../src/lang';

let obj: any = { a: 1, b: 2 };

describe('Lang', () => {
	describe('isExtensible', () => {
		it('isExtensible(obj) - should be extensible', () => {
			expect(isExtensible(obj)).toEqual(true);
		});

		it('isExtensible(obj) - should not be extensible', () => {
			preventExtensions(obj);
			expect(isExtensible(obj)).toEqual(false);
		});
	});
});
