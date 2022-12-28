import _unionBy from 'lodash/unionBy';
import { unionBy } from '../../src/array';

describe('Array', () => {
	describe('unionBy', () => {
		it('unionBy([2.1], [1.2, 2.3], Math.floor)', () => {
			expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual(
				_unionBy([2.1], [1.2, 2.3], Math.floor)
			);
		});
	});
});
