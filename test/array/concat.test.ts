import { concat as _concat } from 'lodash';
import { concat } from '../../src/array';

describe('Array', () => {
	describe('concat', () => {
		const collection = [[1], 2, [3], [[4]], 5];

		it('It should concat the data and return an array', () => {
			expect(concat(collection)).toEqual(_concat(collection));
		});
	});
});
