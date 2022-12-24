import { sumBy as _sumBy } from 'lodash';
import { sumBy } from '../../src/math';

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

describe('Math', () => {
	describe('sumBy', () => {
		it('sumBy(data)', () => {
			const predicate = (o: any) => o.n;
			expect(sumBy(objects, predicate)).toEqual(_sumBy(objects, predicate));
		});
	});
});
