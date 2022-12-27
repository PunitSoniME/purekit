import _flattenDepth from 'lodash/flattenDepth';
import { flattenDepth } from '../../src/array';

const data = [1, [2, [3, [4]], 5]];

describe('Array', () => {
	describe('flattenDepth', () => {
		it('[Array Of Number] It should return the flatten data with depth 1', () => {
			expect(flattenDepth(data, 1)).toEqual(_flattenDepth(data, 1));
		});

		it('[Array Of Number] It should return the flatten data with depth 2', () => {
			expect(flattenDepth(data, 2)).toEqual(_flattenDepth(data, 2));
		});
	});
});
