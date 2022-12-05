import { join as _join } from 'lodash';
import { join } from '../../src/array';

const data = ['a', 'b', 'c'];
const joiner = '~';

describe('Array', () => {
	describe('join', () => {
		it('[Array Of Number] It should return the new string with passed joiner', () => {
			expect(_join(data, joiner)).toEqual(join(data, joiner));
		});
	});
});
