import _wrap from 'lodash/wrap';
import { wrap } from '../../src/function';

const ans = wrap(2, (a: number, b: number, c: number) => a + b + c);
const _ans = _wrap(2, (a: number, b: number, c: number) => a + b + c);

describe('Function', () => {
	describe('wrap', () => {
		it('ans(1, 2)', () => {
			expect(ans(1, 2)).toEqual(_ans(1, 2));
		});
	});
});
