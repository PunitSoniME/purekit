import _uniqBy from 'lodash/uniqBy';
import { uniqBy } from '../../src/array';

describe('Array', () => {
	describe('uniqBy', () => {
		it('uniqBy([2.1, 1.2, 2.3], Math.floor)', () => {
			expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual(
				_uniqBy([2.1, 1.2, 2.3], Math.floor)
			);
		});

		it('uniqBy([2.1, 1.2, 2.3], Math.floor)', () => {
			expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual(
				_uniqBy([2.1, 1.2, 2.3], Math.floor)
			);
		});

		it("uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x')", () => {
			expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')).toEqual(
				_uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')
			);
		});
	});
});
