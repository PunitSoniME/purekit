import { last as _last } from 'lodash';
import { last } from '../../src/array';

const data = [1, 2, 3];

describe('Array', () => {
	describe('last', () => {
		it('[Array Of Number] It should return the last element of an array', () => {
			expect(_last(data)).toEqual(last(data));
		});
	});
});
