import { meanBy as _meanBy } from 'lodash';
import { meanBy } from '../../src/math';

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

describe('Math', () => {
	describe('meanBy', () => {
		it('meanBy(objects, (o) => o.n;)', () => {
			const predicate = (o: any) => o.n;
			expect(meanBy(objects, predicate)).toEqual(_meanBy(objects, predicate));
		});
	});
});
