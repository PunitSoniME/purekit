import _add from 'lodash/add';
import { add } from '../../src/math';

describe('Math', () => {
	describe('add', () => {
		it('add(numbers)', () => {
			expect(add(1, 2)).toEqual(_add(1, 2));
		});
	});
});
