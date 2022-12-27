import _join from 'lodash/join';
import { join } from '../../src/array';

const data = ['a', 'b', 'c'];
const joiner = '~';

describe('Array', () => {
	describe('join', () => {
		it('[Array Of Number] It should return the new string with passed joiner', () => {
			expect(join(data, joiner)).toEqual(_join(data, joiner));
		});
	});
});
