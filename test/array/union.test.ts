import _union from 'lodash/union';
import { union } from '../../src/array';

describe('Array', () => {
	describe('union', () => {
		it('[Array Of Numbers] Creates an array of unique values, in order', () => {
			expect(union([2], [1, 2])).toEqual(_union([2], [1, 2]));
		});
	});
});
