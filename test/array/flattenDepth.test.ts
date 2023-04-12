import _flattenDepth from 'lodash/flattenDepth';
import { flattenDepth } from '../../src/array';

const data = [1, [2, [3, [4]], 5]];

describe('Array', () => {
	describe('flattenDepth', () => {
		it('flattenDepth([])', () => {
			expect(flattenDepth([])).toEqual(_flattenDepth([]));
		});

		it('flattenDepth(data, 1)', () => {
			expect(flattenDepth(data, 1)).toEqual(_flattenDepth(data, 1));
		});

		it('flattenDepth(data, 2)', () => {
			expect(flattenDepth(data, 2)).toEqual(_flattenDepth(data, 2));
		});
	});
});
