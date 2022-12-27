import _remove from 'lodash/remove';
import { remove } from '../../src/array';

describe('Array', () => {
	describe('remove', () => {
		it('[Array Of numbers] It should return the modified array with removed values - multiple record remove', () => {
			const predicate = (n: number) => {
				return n % 2 === 0;
			};
			const _removeResult = _remove([1, 2, 3, 4], predicate);
			const removeResult = remove([1, 2, 3, 4], predicate);

			expect(removeResult).toEqual(_removeResult);
		});
	});
});
