import _intersectionBy from 'lodash/intersectionBy';
import { intersectionBy } from '../../src/array';

describe('Array', () => {
	describe('intersectionBy', () => {
		it('intersectionBy([], [])', () => {
			expect(intersectionBy([], [])).toEqual(_intersectionBy([], []));
		});

		it('intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)', () => {
			expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual(
				_intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
			);
		});

		it("[{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'", () => {
			expect(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')).toEqual(
				_intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')
			);
		});
	});
});
