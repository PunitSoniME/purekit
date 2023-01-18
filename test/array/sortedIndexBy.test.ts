import _sortedIndexBy from 'lodash/sortedIndexBy';
import { sortedIndexBy } from '../../src/array';

const objects = [{ x: 4 }, { x: 5 }];

describe('Array', () => {
	describe('sortedIndexBy', () => {
		it("sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })", () => {
			expect(
				sortedIndexBy(objects, { x: 4 }, function (o: any) {
					return o.x;
				})
			).toEqual(
				_sortedIndexBy(objects, { x: 4 }, function (o: any) {
					return o.x;
				})
			);
		});

		it("sortedIndexBy(objects, { 'x': 4 }, 'x')", () => {
			expect(sortedIndexBy(objects, { x: 4 }, 'x')).toEqual(
				_sortedIndexBy(objects, { x: 4 }, 'x')
			);
		});
	});
});
