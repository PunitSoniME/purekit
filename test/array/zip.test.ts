import { zip as _zip } from 'lodash';
import { zip } from '../../src/array';

describe('Array', () => {
	describe('zip', () => {
		it('[Array Of Numbers] Creates an array of zipped values', () => {
			expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual(
				_zip(['a', 'b'], [1, 2], [true, false])
			);
		});
	});
});
