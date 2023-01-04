import _unionBy from 'lodash/unionBy';
import { unionBy } from '../../src/array';

describe('Array', () => {
	describe('unionBy', () => {
		it('unionBy([2.1], [1.2, 2.3], Math.floor)', () => {
			expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual(
				_unionBy([2.1], [1.2, 2.3], Math.floor)
			);
		});

		it("unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')", () => {
			expect(unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')).toEqual(
				_unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')
			);
		});

		it("unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')", () => {
			expect(unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')).toEqual(
				_unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x')
			);
		});
	});
});
