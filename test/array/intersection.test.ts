import { intersection as _intersection } from 'lodash';
import { intersection } from '../../src/array';

const array1 = [2, 1];
const array2 = [2, 3];

describe('Array', () => {
	describe('intersection', () => {
		it('[Array Of Number] It should return same array except last element', () => {
			expect(_intersection(array1, array2)).toEqual(
				intersection(array1, array2)
			);
		});
	});
});
