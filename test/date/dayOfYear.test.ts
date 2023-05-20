import { dayOfYear } from '../../src/date';

describe('Number', () => {
	describe('dayOfYear', () => {
		//	1st January
		it("dayOfYear(new Date('1/1/2023'))", () => {
			expect(dayOfYear(new Date('1/1/2023'))).toBe(1);
		});

		//	31st January
		it("dayOfYear(new Date('1/31/2023'))", () => {
			expect(dayOfYear(new Date('1/31/2023'))).toBe(31);
		});

		//	5th Feb
		it("dayOfYear(new Date('2/5/2023'))", () => {
			expect(dayOfYear(new Date('2/5/2023'))).toBe(36);
		});
	});
});
