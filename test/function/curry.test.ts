import _curry from 'lodash/curry';
import { curry } from '../../src/function';

const abc = (a: any, b: any, c: any) => [a, b, c];

const curried = curry(abc);
const _curried = _curry(abc);

describe('Function', () => {
	describe('curry', () => {
		it('curried(1)(2)(3)', () => {
			expect(curried(1)(2)(3)).toEqual(_curried(1)(2)(3));
		});

		it('curried(1, 2)(3)', () => {
			expect(curried(1, 2)(3)).toEqual(_curried(1, 2)(3));
		});

		it('curried(1, 2, 3)', () => {
			expect(curried(1, 2, 3)).toEqual(_curried(1, 2, 3));
		});
	});
});
