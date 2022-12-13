import { concat as _concat } from 'lodash';
import { concat } from '../../src/array';

describe('Array', () => {
	describe('concat', () => {
		const array = [1];
		var other = concat(array, 2, [3]);
		var _other = _concat(array, 2, [3]);

		it('It should concat the data and return an array', () => {
			expect(other).toEqual(_other);
		});
	});
});
