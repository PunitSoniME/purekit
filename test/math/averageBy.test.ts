import { averageBy } from '../../src/math';

const data = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
const students = [
	{ name: 'Alice', score: 80 },
	{ name: 'Bob', score: 90 },
	{ name: 'Charlie', score: 75 },
];

describe('Math', () => {
	describe('averageBy', () => {
		it('averageBy(data, o => o.n)', () => {
			expect(averageBy(data, o => o.n)).toEqual(5);
		});

		it('averageBy(data, "n")', () => {
			expect(averageBy(data, 'n')).toEqual(5);
		});

		it('averageBy(students, "score")', () => {
			expect(averageBy(students, 'score')).toEqual(81.66666666666667);
		});
	});
});
