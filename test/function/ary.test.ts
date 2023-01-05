import _ary from 'lodash/ary';
import { ary } from '../../src/function';

describe('Function', () => {
	describe('ary', () => {
		it("ary(['6', '8', '10'].map(ary(Number.parseInt, 1)))", () => {
			expect(['6', '8', '10'].map(ary(Number.parseInt, 1))).toEqual(
				['6', '8', '10'].map(_ary(Number.parseInt, 1))
			);
		});
	});
});
