import { uniq as _uniq } from 'lodash';
import { uniq } from '../../src/array';

describe('Array', () => {
	describe('uniq', () => {
		it('[Array Of Numbers] Creates an array of unique values', () => {
			const data = [2, 1, 2];
			expect(uniq(data)).toEqual(_uniq(data));
		});
	});
});
