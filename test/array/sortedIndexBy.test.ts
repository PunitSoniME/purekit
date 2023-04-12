import _sortedIndexBy from 'lodash/sortedIndexBy';
import { sortedIndexBy } from '../../src/array';

const objects = [{ x: 4 }, { x: 5 }];

describe('Array', () => {
	describe('sortedIndexBy', () => {
		it('sortedIndexBy(objects, { x: 4 })', () => {
			expect(sortedIndexBy(objects, { x: 4 })).toEqual(
				_sortedIndexBy(objects, { x: 4 })
			);
		});

		it('sortedIndexBy(objects, { x: 4 }, (o: any) => o.x)', () => {
			expect(sortedIndexBy(objects, { x: 4 }, (o: any) => o.x)).toEqual(
				_sortedIndexBy(objects, { x: 4 }, (o: any) => o.x)
			);
		});

		it("sortedIndexBy(objects, { 'x': 4 }, 'x')", () => {
			expect(sortedIndexBy(objects, { x: 4 }, 'x')).toEqual(
				_sortedIndexBy(objects, { x: 4 }, 'x')
			);
		});
	});
});
