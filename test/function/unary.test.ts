import _unary from 'lodash/unary';
import { unary } from '../../src/function';

describe('Function', () => {
	describe('unary', () => {
		it("['6', '8', '10'].map(unary(Number.parseInt))", () => {
			const data = ['6', '8', '10'];

			const ans = data.map(unary(Number.parseInt));
			const _ans = data.map(_unary(Number.parseInt));

			expect(ans).toEqual(_ans);
		});
	});
});
