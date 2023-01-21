import _divide from 'lodash/divide';
import { divide } from '../../src/math';

describe('Math', () => {
	describe('divide', () => {
		it('divide(6, 4)', () => {
			expect(divide(6, 4)).toEqual(_divide(6, 4)); //	1.5
		});

		it('divide(-6, 4)', () => {
			expect(divide(-6, 4)).toEqual(_divide(-6, 4)); //	-1.5
		});

		it('divide(-6, -4)', () => {
			expect(divide(-6, -4)).toEqual(_divide(-6, -4)); //	-1.5
		});

		it("divide(-'6', '4')", () => {
			//	@ts-ignore
			expect(divide('6', '4')).toEqual(_divide('6', '4')); //	1.5
		});

		it("divide('x', 'y')", () => {
			//	@ts-ignore
			expect(divide('x', 'y')).toEqual(_divide('x', 'y')); //	NaN
		});
	});
});
