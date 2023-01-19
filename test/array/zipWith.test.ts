import _zipWith from 'lodash/zipWith';
import { zipWith } from '../../src/array';

const predicate1 = function (a: number, b: number, c: number) {
	return a + b + c;
};

const predicate2 = function (a: number, b: number) {
	return a + b;
};

describe('Array', () => {
	describe('zipWith', () => {
		it('zipWith([1, 2], [10, 20], [100, 200], predicate1)', () => {
			expect(zipWith([1, 2], [10, 20], [100, 200], predicate1)).toEqual(
				_zipWith([1, 2], [10, 20], [100, 200], predicate1)
			);
		});

		it('zipWith([1, 2], [10, 20], [100, 200], predicate2)', () => {
			expect(zipWith([1, 2], [10, 20], [100, 200], predicate2)).toEqual(
				_zipWith([1, 2], [10, 20], [100, 200], predicate2)
			);
		});

		it('zipWith([1, 2], [10, 20], [100, 200])', () => {
			expect(zipWith([1, 2], [10, 20], [100, 200])).toEqual(
				_zipWith([1, 2], [10, 20], [100, 200])
			);
		});
	});
});
