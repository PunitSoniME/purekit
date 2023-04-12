import _sortedLastIndexBy from 'lodash/sortedLastIndexBy';
import _identity from 'lodash/identity';
import { sortedLastIndexBy } from '../../src/array';

const objects = [{ x: 4 }, { x: 5 }];

describe('Array', () => {
	describe('sortedLastIndexBy', () => {
		it('sortedLastIndexBy(objects, { x: 4 })', () => {
			expect(sortedLastIndexBy(objects, { x: 4 })).toEqual(
				_sortedLastIndexBy(objects, { x: 4 }, _identity)
			);
		});

		it("sortedLastIndexBy(objects, { 'x': 4 }, (o: any) => o.x)", () => {
			expect(sortedLastIndexBy(objects, { x: 4 }, (o: any) => o.x)).toEqual(
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
