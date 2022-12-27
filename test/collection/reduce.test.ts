import _reduce from 'lodash/reduce';
import { reduce } from '../../src/collection';

describe('Collection', () => {
	describe('reduce', () => {
		it('reduce([1, 2], (sum: number, n: number) => { return sum + n; }, 0)', () => {
			expect(
				reduce(
					[1, 2],
					(sum: number, n: number) => {
						return sum + n;
					},
					0
				)
			).toEqual(
				_reduce(
					[1, 2],
					(sum: number, n: number) => {
						return sum + n;
					},
					0
				)
			);
		});

		it("reduce({ 'a': 1, 'b': 2, 'c': 1 }, predicate, {})", () => {
			const predicate = (result: any, value: any, key: any) => {
				(result[value] || (result[value] = [])).push(key);
				return result;
			};

			expect(reduce({ a: 1, b: 2, c: 1 }, predicate, {})).toEqual(
				_reduce({ a: 1, b: 2, c: 1 }, predicate, {})
			);
		});
	});
});
