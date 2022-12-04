import { flatten as _flatten } from 'lodash';
import { flatten } from '../../src/array';

const data = [1, [2, [3, [4]], 5]];

describe('Array', () => {
	describe('flatten', () => {
		it('[Array Of Number] It should return the flatten data', () => {
			expect(_flatten(data)).toEqual(flatten(data));
		});
	});
});
