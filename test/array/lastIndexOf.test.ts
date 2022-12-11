import { lastIndexOf as _lastIndexOf } from 'lodash';
import { lastIndexOf } from '../../src/array';

const data = [1, 2, 1, 2];

describe('Array', () => {
	describe('lastIndexOfIndexOf', () => {
		it('[Array Of Number] It should return the lastIndexOf element from an array', () => {
			expect(lastIndexOf(data, 2)).toEqual(_lastIndexOf(data, 2));
		});

		it('[Array Of Number] It should return the lastIndexOf element from an array from fromIndex', () => {
			expect(lastIndexOf(data, 2, 2)).toEqual(_lastIndexOf(data, 2, 2));
		});
	});
});
