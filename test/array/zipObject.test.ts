import { zipObject as _zipObject } from 'lodash';
import { zipObject } from '../../src/array';

describe('Array', () => {
	describe('zipObject', () => {
		it('[Array Of Numbers] Creates an array of zipped object values', () => {
			expect(zipObject(['a', 'b'], [1, 2])).toEqual(
				_zipObject(['a', 'b'], [1, 2])
			);
		});
	});
});
