import _unzipWith from 'lodash/unzipWith';
import _add from 'lodash/add';
import { unzipWith, zip } from '../../src/array';
import { add } from '../../src/math';

describe('Array', () => {
	describe('unzipWith', () => {
		it('[Array Of Numbers] Creates an array of unzipped With values', () => {
			var zipped = zip([1, 2], [10, 20], [100, 200]);
			expect(unzipWith(zipped, add)).toEqual(_unzipWith(zipped, _add));
		});
	});
});
