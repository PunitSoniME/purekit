import { divide as _divide } from 'lodash';
import { divide } from '../../src/math';

describe('Math', () => {
	describe('divide', () => {
		it('divide(6, 4)', () => {
			expect(divide(6, 4)).toEqual(_divide(6, 4));
		});
	});
});
