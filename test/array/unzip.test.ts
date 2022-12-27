import _unzip from 'lodash/unzip';
import { unzip, zip } from '../../src/array';

describe('Array', () => {
	describe('unzip', () => {
		it('[Array Of Numbers] Creates an array of unzipped values', () => {
			var zipped = zip(['a', 'b'], [1, 2], [true, false]);
			expect(unzip(zipped)).toEqual(_unzip(zipped));
		});
	});
});
