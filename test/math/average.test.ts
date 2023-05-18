import { average } from '../../src/math';

describe('Math', () => {
	describe('average', () => {
		it('average(...[1, 2, 3])', () => {
			expect(average(...[1, 2, 3])).toEqual(2);
		});

		it('average(1, 2, 3)', () => {
			expect(average(1, 2, 3)).toEqual(2);
		});

		it('average(4, 6, 2, 8)', () => {
			expect(average(4, 6, 2, 8)).toEqual(5);
		});

		it('average()', () => {
			expect(average()).toEqual(NaN);
		});
	});
});
