import { inRange, random } from '../../src/number';

describe('Number', () => {
	describe('random', () => {
		it('random(0, 5)', () => {
			const randomNumber = random(0, 5);
			console.log('random(0, 5)', randomNumber);
			expect(inRange(randomNumber, 0, 5)).toEqual(true);
		});

		it('random(5)', () => {
			const randomNumber = random(0, 5);
			expect(inRange(randomNumber, 0, 5)).toEqual(true);
		});

		it('random(5, true)', () => {
			const randomNumber = random(5, true);
			console.log('random(5, true)', randomNumber);
			expect(inRange(randomNumber, 0, 5)).toEqual(true);
		});

		it('random(1.2, 5.2)', () => {
			const randomNumber = random(1.2, 5.2);
			expect(inRange(randomNumber, 0, 5)).toEqual(true);
		});
	});
});
