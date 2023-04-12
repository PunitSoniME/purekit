import _differenceBy from 'lodash/differenceBy';
import { differenceBy } from '../../src/array';

describe('Array', () => {
	describe('differenceBy', () => {
		it('differenceBy([])', () => {
			expect(differenceBy([], [])).toEqual(_differenceBy([], []));
		});

		it("differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')", () => {
			const data1 = [{ x: 2 }, { x: 1 }];
			const data2 = [{ x: 1 }];
			expect(differenceBy(data1, data2, 'x')).toEqual(
				_differenceBy(data1, data2, 'x')
			);
		});

		it("differenceBy([{ x: 2 }, { x: 1 }, { x: 3 }], [{ x: 1 }], [{ x: 3 }], 'x')", () => {
			const data1 = [{ x: 2 }, { x: 1 }, { x: 3 }];
			const data2 = [{ x: 1 }];
			const data3 = [{ x: 3 }];
			expect(differenceBy(data1, data2, data3, 'x')).toEqual(
				_differenceBy(data1, data2, data3, 'x')
			);
		});

		it('differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)', () => {
			const data1 = [2.1, 1.2];
			const data2 = [2.3, 3.4];
			expect(differenceBy(data1, data2, Math.floor)).toEqual(
				_differenceBy(data1, data2, Math.floor)
			);
		});
	});
});
