import { includes as _includes } from 'lodash';
import { includes } from '../../src/collection';

describe('Collection', () => {
	describe('includes', () => {
		it('includes([1, 2, 3], 1)', () => {
			expect(includes([1, 2, 3], 1)).toEqual(_includes([1, 2, 3], 1));
		});

		it('includes([1, 2, 3], 1, 2)', () => {
			expect(includes([1, 2, 3], 1, 2)).toEqual(_includes([1, 2, 3], 1, 2));
		});

		it("includes({ 'a': 1, 'b': 2 }, 1)", () => {
			expect(includes({ a: 1, b: 2 }, 1)).toEqual(_includes({ a: 1, b: 2 }, 1));
		});

		it("includes('abcd', 'bc')", () => {
			expect(includes('abcd', 'bc')).toEqual(_includes('abcd', 'bc'));
		});
	});
});
