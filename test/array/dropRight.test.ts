import _dropRight from 'lodash/dropRight';
import { dropRight } from '../../src/array';

describe('Array', () => {
	describe('dropRight', () => {
		const data = [1, 2, 3];

		it('[Array Of Number] It should remove the first element from right and return rest of the array', () => {
			expect(dropRight(data)).toEqual(_dropRight(data));
		});

		it('[Array Of Number] It should remove the two elements from right and return rest of the array', () => {
			expect(dropRight(data, 2)).toEqual(_dropRight(data, 2));
		});

		it('[Array Of Number] It should remove the five elements from right and return rest of the array', () => {
			expect(dropRight(data, 5)).toEqual(_dropRight(data, 5));
		});

		it('[Array Of Number] It should remove the zero elements from right and return rest of the array', () => {
			expect(dropRight(data, 0)).toEqual(_dropRight(data, 0));
		});
	});
});
