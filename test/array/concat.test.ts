import _concat from 'lodash/concat';
import { concat } from '../../src/array';

describe('Array', () => {
	describe('concat', () => {
		const array = [1];

		it('It should concat the data and return an array', () => {
			expect(concat(array, 2, [3])).toEqual(_concat(array, 2, [3]));
		});
	});
});
