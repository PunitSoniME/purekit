import { maxBy as _maxBy } from 'lodash';
import { maxBy } from '../../src/math';

const objects = [{ n: 1 }, { n: 2 }];

describe('Math', () => {
	describe('maxBy', () => {
		it('maxBy(objects, (o: any) => { o.n; })', () => {
			const predicate = (o: any) => o.n;
			expect(maxBy(objects, predicate)).toEqual(_maxBy(objects, predicate));
		});

		it("maxBy(objects, 'n')", () => {
			expect(maxBy(objects, 'n')).toEqual(_maxBy(objects, 'n'));
		});
	});
});
