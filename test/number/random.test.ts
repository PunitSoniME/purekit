import _inRange from 'lodash/inRange';
import { inRange, random } from '../../src/number';

describe('Number', () => {
	describe('random', () => {
		it('random(0, 5)', () => {
			const randomNumber = random(0, 5);
			expect(inRange(randomNumber, 0, 5)).toEqual(_inRange(randomNumber, 0, 5));
		});

		it('random(5)', () => {
			const randomNumber = random(0, 5);
			expect(inRange(randomNumber, 0, 5)).toEqual(_inRange(randomNumber, 0, 5));
		});

		it('random(5, true)', () => {
			const randomNumber = random(5, true);
			expect(inRange(randomNumber, 0, 5)).toEqual(_inRange(randomNumber, 0, 5));
		});

		it('random(1.2, 5.2)', () => {
			const randomNumber = random(1.2, 5.2);
			expect(inRange(randomNumber, 0, 5)).toEqual(_inRange(randomNumber, 0, 5));
		});
	});
});
