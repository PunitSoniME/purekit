import _curryRight from 'lodash/curryRight';
import { curryRight } from '../../src/function';

const abc = (a: any, b: any, c: any) => [a, b, c];

const curriedRight = curryRight(abc);
const _curriedRight = _curryRight(abc);

describe('Function', () => {
	describe('curryRight', () => {
		it('curriedRight(1)(2)(3)', () => {
			expect(curriedRight(1)(2)(3)).toEqual(_curriedRight(1)(2)(3));
		});

		it('curriedRight(1, 2)(3)', () => {
			expect(curriedRight(1, 2)(3)).toEqual(_curriedRight(1, 2)(3));
		});

		it('curriedRight(1, 2, 3)', () => {
			expect(curriedRight(1, 2, 3)).toEqual(_curriedRight(1, 2, 3));
		});
	});
});
