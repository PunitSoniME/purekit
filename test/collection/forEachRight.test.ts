import _forEachRight from 'lodash/forEachRight';
import { forEachRight } from '../../src/collection';

describe('Collection', () => {
	describe('forEachRight', () => {
		it('[Array Of Number] Iterates over elements of collection and invokes predicate for each element.', () => {
			let data: number[] = [];
			let _data: number[] = [];

			forEachRight([1, 2], function (value: number) {
				data.push(value);
			});

			_forEachRight([1, 2], function (value: number) {
				_data.push(value);
			});

			expect(data).toEqual(_data);
		});
	});
});
