import { without as _without } from 'lodash';
import { without } from '../../src/array';

describe('Array', () => {
	describe('without', () => {
		it('[Array Of Numbers] Creates an array of without passed values', () => {
			expect(without([2, 1, 2, 3], 1, 2)).toEqual(_without([2, 1, 2, 3], 1, 2));
		});
	});
});
