import _divide from 'lodash/divide';
import { divide } from '../../src/math';

describe('Math', () => {
	describe('divide', () => {
		it('divide(6, 4)', () => {
			expect(divide(6, 4)).toEqual(_divide(6, 4));
		});
	});
});
