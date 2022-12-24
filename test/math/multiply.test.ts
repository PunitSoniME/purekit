import { multiply as _multiply } from 'lodash';
import { multiply } from '../../src/math';

describe('Math', () => {
	describe('multiply', () => {
		it('multiply(6, 4)', () => {
			expect(multiply(6, 4)).toEqual(_multiply(6, 4));
		});
	});
});
