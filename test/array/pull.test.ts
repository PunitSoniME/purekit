import { pull as _pull } from 'lodash';
import { pull } from '../../src/array';

const data = ['a', 'b', 'c', 'a', 'b', 'c'];

describe('Array', () => {
	describe('pull', () => {
		it('[Array Of string] It should return the modified array with removed values', () => {
			expect(pull(data, 'a', 'c')).toEqual(_pull(data, 'a', 'c'));
		});
	});
});
