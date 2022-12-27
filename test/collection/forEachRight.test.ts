import _forEachRight from 'lodash/forEachRight';
import { forEachRight } from '../../src/collection';

describe('Collection', () => {
	describe('forEachRight', () => {
		it('[Array Of Number] Iterates over elements of collection and invokes predicate for each element.', () => {
			expect(
				forEachRight([1, 2], function (value: number) {
					console.log(value);
				})
			).toEqual(
				_forEachRight([1, 2], function (value: number) {
					console.log(value);
				})
			);
		});
	});
});
