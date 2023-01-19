import _xorBy from 'lodash/xorBy';
import { xorBy } from '../../src/array';

describe('Array', () => {
	describe('xorBy', () => {
		it('xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)', () => {
			expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual(
				_xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
			);
		});

		it("xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')", () => {
			expect(xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')).toEqual(
				_xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')
			);
		});
	});
});
