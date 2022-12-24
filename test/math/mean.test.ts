import { mean as _mean } from 'lodash';
import { mean } from '../../src/math';

const data = [4, 2, 8, 6];

describe('Math', () => {
	describe('mean', () => {
		it('mean(data)', () => {
			expect(mean(data)).toEqual(_mean(data));
		});
	});
});
