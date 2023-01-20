import _minBy from 'lodash/minBy';
import { minBy } from '../../src/math';

const objects = [{ n: 1 }, { n: 2 }];

describe('Math', () => {
	describe('minBy', () => {
		it('minBy(objects, (o: any) => o.n;)', () => {
			const predicate = (o: any) => o.n;
			expect(minBy(objects, predicate)).toEqual(_minBy(objects, predicate));
		});

		it("minBy(objects, 'n')", () => {
			expect(minBy(objects, 'n')).toEqual(_minBy(objects, 'n'));
		});

		//	This test case fails in lodash
		it('minBy - custom', () => {
			interface SomeType {
				value: number;
			}

			const array: SomeType[] = [{ value: 2 }, { value: 3 }, { value: 4 }];
			expect(minBy(array, 'value')).toEqual({ value: 2 });
		});
	});
});
