import _negate from 'lodash/negate';
import { negate } from '../../src/function';

const isEven = (n: number) => n % 2 === 0;

const negated = [1, 2, 3, 4, 5, 6].filter(negate(isEven));
const _negated = [1, 2, 3, 4, 5, 6].filter(_negate(isEven));

describe('Function', () => {
	describe('negate', () => {
		it('negate(numbers)', () => {
			expect(negated).toEqual(_negated);
		});
	});
});
