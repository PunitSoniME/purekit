import { sum as _sum } from 'lodash';
import { sum } from '../../src/math';

const data = [4, 2, 8, 6];

describe('Math', () => {
	describe('sum', () => {
		it('sum(data)', () => {
			expect(sum(data)).toEqual(_sum(data));
		});
	});
});
