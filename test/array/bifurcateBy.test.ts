import { bifurcateBy } from '../../src/array';

describe('Array', () => {
	describe('bifurcateBy', () => {
		it("bifurcateBy(['beep', 'boop', 'foo', 'bar'], (x: any) => x[0] === 'b')", () => {
			expect(
				bifurcateBy(['beep', 'boop', 'foo', 'bar'], (x: any) => x[0] === 'b')
			).toEqual([['beep', 'boop', 'bar'], ['foo']]);
		});

		it('bifurcateBy([1, 2, 3, 4, 5], (num: number) => num % 2 === 0)', () => {
			const array = [1, 2, 3, 4, 5];
			const isEven = (num: number) => num % 2 === 0;
			const result = bifurcateBy(array, isEven);
			expect(result).toEqual([
				[2, 4],
				[1, 3, 5],
			]);
		});

		it("bifurcateBy(['apple', 'banana', 'cherry', 'date'], (word: string) => word.startsWith('b')", () => {
			const words = ['apple', 'banana', 'cherry', 'date'];
			const startsWithB = (word: string) => word.startsWith('b');
			const result = bifurcateBy(words, startsWithB);
			expect(result).toEqual([['banana'], ['apple', 'cherry', 'date']]);
		});
	});
});
