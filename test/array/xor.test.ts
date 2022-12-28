import _xor from 'lodash/xor';
import { xor } from '../../src/array';

describe('Array', () => {
	describe('xor', () => {
		it('xor([2, 1, 9], [2, 3], [2, 4], [1, 3])', () => {
			expect(xor([2, 1, 9], [2, 3], [2, 4], [1, 3])).toEqual(
				_xor([2, 1, 9], [2, 3], [2, 4], [1, 3])
			);
		});

		it('xor([2, 1], [2, 3])', () => {
			expect(xor([2, 1], [2, 3])).toEqual(_xor([2, 1], [2, 3]));
		});
	});
});
