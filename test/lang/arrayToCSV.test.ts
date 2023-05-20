import { arrayToCSV } from '../../src/lang';

const data = [
	['a', 'b'],
	['c', 'd'],
];

describe('Lang', () => {
	describe('arrayToCSV', () => {
		it("arrayToCSV([['a', 'b'], ['c', 'd']])", () => {
			expect(arrayToCSV(data)).toEqual('"a","b"\n"c","d"');
		});

		it("arrayToCSV([['a', 'b'], ['c', 'd']], ';')", () => {
			expect(arrayToCSV(data, ';')).toEqual('"a";"b"\n"c";"d"');
		});
	});
});
