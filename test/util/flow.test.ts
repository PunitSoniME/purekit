import _flow from 'lodash/flow';
import _add from 'lodash/add';
import { flow } from '../../src/util';
import { add } from '../../src/math';

const square = (n: number) => n * n;

describe('Util', () => {
	describe('flow', () => {
		it('flow([add, square])', () => {
			const addSquare = flow([add, square]);
			const _addSquare = _flow([_add, square]);

			expect(addSquare(1, 2)).toEqual(_addSquare(1, 2));
		});
	});
});
