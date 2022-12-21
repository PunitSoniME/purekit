import { reduceRight as _reduceRight } from 'lodash';
import { reduceRight } from '../../src/collection';

const data = [
	[0, 1],
	[2, 3],
	[4, 5],
];
const predicate = (flattened: any, other: any) => flattened.concat(other);

describe('Collection', () => {
	describe('reduceRight', () => {
		it('reduceRight(data, predicate, [])', () => {
			expect(reduceRight(data, predicate, [])).toEqual(
				_reduceRight(data, predicate, [])
			);
		});
	});
});
