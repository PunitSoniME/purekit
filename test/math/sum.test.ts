import _sum from 'lodash/sum';
import { sum } from '../../src/math';

const data = [4, 2, 8, 6];

describe('Math', () => {
	describe('sum', () => {
		it('sum(data)', () => {
			expect(sum(data)).toEqual(_sum(data));
		});
	});
});
