import _rearg from 'lodash/rearg';
import { rearg } from '../../src/function';

describe('Function', () => {
	describe('rearg', () => {
		it("rearged('b', 'c', 'a')", () => {
			const rearged = rearg((a: any, b: any, c: any) => [a, b, c], [2, 0, 1]);
			const _rearged = _rearg((a: any, b: any, c: any) => [a, b, c], [2, 0, 1]);

			expect(rearged('b', 'c', 'a')).toEqual(_rearged('b', 'c', 'a'));
		});
	});
});
