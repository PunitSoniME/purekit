import { pullAll as _pullAll } from 'lodash';
import { pullAll } from '../../src/array';

const data = ['a', 'b', 'c', 'a', 'b', 'c'];

describe('Array', () => {
	describe('pullAll', () => {
		it('[Array Of string] It should return the modified array with removed values', () => {
			expect(pullAll(data, ['a', 'c'])).toEqual(_pullAll(data, ['a', 'c']));
		});
	});
});
