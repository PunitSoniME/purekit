import { minBy as _minBy } from 'lodash';
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
	});
});
