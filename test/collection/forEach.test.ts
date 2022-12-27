import _forEach from 'lodash/forEach';
import { forEach } from '../../src/collection';

describe('Collection', () => {
	describe('forEach', () => {
		it('[Array Of Number] Iterates over elements of collection and invokes predicate for each element.', () => {
			expect(
				forEach([1, 2], function (value: number) {
					console.log(value);
				})
			).toEqual(
				_forEach([1, 2], function (value) {
					console.log(value);
				})
			);
		});

		it('[Object] Iterates over elements of collection and invokes predicate for each element.', () => {
			expect(
				forEach({ a: 1, b: 2 }, function (_: number, key: string) {
					console.log(key);
				})
			).toEqual(
				_forEach({ a: 1, b: 2 }, function (_: number, key: string) {
					console.log(key);
				})
			);
		});
	});
});
