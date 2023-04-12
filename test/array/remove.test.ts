import _remove from 'lodash/remove';
import { remove } from '../../src/array';

describe('Array', () => {
	describe('remove', () => {
		it('remove([])', () => {
			const removeResult = remove([]);
			const _removeResult = _remove([]);

			expect(removeResult).toEqual(_removeResult);
		});

		it('remove([1, 2, 3, 4], (n: number) => n % 2 === 0)', () => {
			const predicate = (n: number) => n % 2 === 0;
			const removeResult = remove([1, 2, 3, 4], predicate);
			const _removeResult = _remove([1, 2, 3, 4], predicate);

			expect(removeResult).toEqual(_removeResult);
		});
	});
});
