import _pullAt from 'lodash/pullAt';
import { pullAt } from '../../src/array';

describe('Array', () => {
	describe('pullAt', () => {
		it('[Array Of string] It should return the modified array with removed values - multiple record remove', () => {
			const _pullAtResult = _pullAt(['a', 'b', 'c', 'd'], [1, 3]);
			const pullAtResult = pullAt(['a', 'b', 'c', 'd'], [1, 3]);

			expect(pullAtResult).toEqual(_pullAtResult);
		});

		it('[Array Of string] It should return the modified array with removed values - multiple record remove with negative value', () => {
			const pullAtResult = pullAt(['a', 'b', 'c', 'd'], [1, -1]);
			expect(pullAtResult).toEqual(['b', 'd']);
		});

		it('[Array Of string] It should return the modified array with removed values - single record remove', () => {
			const _pullAtResult = _pullAt(['a', 'b', 'c', 'd'], 1);
			const pullAtResult = pullAt(['a', 'b', 'c', 'd'], 1);

			expect(pullAtResult).toEqual(_pullAtResult);
		});

		it('[Array Of string] It should return the modified array with removed values - single record remove with negative value', () => {
			const pullAtResult = pullAt(['a', 'b', 'c', 'd'], -1);

			expect(pullAtResult).toEqual(['d']);
		});
	});
});
