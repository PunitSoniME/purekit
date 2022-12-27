import _last from 'lodash/last';
import { last } from '../../src/array';

const data = [1, 2, 3];

describe('Array', () => {
	describe('last', () => {
		it('[Array Of Number] It should return the last element from an array', () => {
			expect(last(data)).toEqual(_last(data));
		});
	});
});
