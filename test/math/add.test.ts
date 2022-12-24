import { add as _add } from 'lodash';
import { add } from '../../src/math';

describe('Math', () => {
	describe('add', () => {
		it('add(numbers)', () => {
			expect(add(1, 2)).toEqual(_add(1, 2));
		});
	});
});
