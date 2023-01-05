import _flip from 'lodash/flip';
import { flip } from '../../src/function';

const flipped = flip((...args: any) => args);
const _flipped = _flip((...args: any) => args);

describe('Function', () => {
	describe('flip', () => {
		it("flipped('a', 'b', 'c', 'd')", () => {
			expect(flipped('a', 'b', 'c', 'd')).toEqual(_flipped('a', 'b', 'c', 'd'));
		});
	});
});
