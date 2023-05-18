import { bifurcate } from '../../src/array';

describe('Array', () => {
	describe('bifurcate', () => {
		it("bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])", () => {
			expect(
				bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])
			).toEqual([['beep', 'boop', 'bar'], ['foo']]);
		});

		it('bifurcate([1, 2, 3, 4, 5], [true, false, true, false, true])', () => {
			expect(
				bifurcate([1, 2, 3, 4, 5], [true, false, true, false, true])
			).toEqual([
				[1, 3, 5],
				[2, 4],
			]);
		});

		it("bifurcate(['apple', 'banana', 'cherry', 'date'], [false, true, true, false])", () => {
			expect(
				bifurcate(
					['apple', 'banana', 'cherry', 'date'],
					[false, true, true, false]
				)
			).toEqual([
				['banana', 'cherry'],
				['apple', 'date'],
			]);
		});
	});
});
