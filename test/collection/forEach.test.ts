import _forEach from 'lodash/forEach';
import { forEach } from '../../src/collection';

describe('Collection', () => {
	describe('forEach', () => {
		it('[Array Of Number] Iterates over elements of collection and invokes predicate for each element.', () => {
			let data: number[] = [];
			let _data: number[] = [];

			forEach([1, 2], function (value: number) {
				data.push(value);
			});

			_forEach([1, 2], function (value: number) {
				_data.push(value);
			});

			expect(data).toEqual(_data);
		});

		it('[Object] Iterates over elements of collection and invokes predicate for each element.', () => {
			let data: string[] = [];
			let _data: string[] = [];

			forEach({ a: 1, b: 2 }, function (_: number, key: string) {
				data.push(key);
			});

			_forEach({ a: 1, b: 2 }, function (_: number, key: string) {
				_data.push(key);
			});

			expect(data).toEqual(_data);
		});
	});
});
