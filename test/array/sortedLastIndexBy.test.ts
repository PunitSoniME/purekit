import _sortedLastIndexBy from 'lodash/sortedLastIndexBy';
import { sortedLastIndexBy } from '../../src/array';

const objects = [{ x: 4 }, { x: 5 }];

describe('Array', () => {
	describe('sortedLastIndexBy', () => {
		it("sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })", () => {
			expect(
				sortedLastIndexBy(objects, { x: 4 }, function (o: any) {
					return o.x;
				})
			).toEqual(
				_sortedLastIndexBy(objects, { x: 4 }, function (o: any) {
					return o.x;
				})
			);
		});

		it("sortedLastIndexBy(objects, { 'x': 4 }, 'x')", () => {
			expect(sortedLastIndexBy(objects, { x: 4 }, 'x')).toEqual(
				_sortedLastIndexBy(objects, { x: 4 }, 'x')
			);
		});
	});
});
