import _flowRight from 'lodash/flowRight';
import _add from 'lodash/add';
import { flowRight } from '../../src/util';
import { add } from '../../src/math';

const square = (n: number) => n * n;

describe('Util', () => {
	describe('flowRight', () => {
		it('flowRight([square, add])', () => {
			const addSquare = flowRight([square, add]);
			const _addSquare = _flowRight([square, _add]);

			expect(addSquare(1, 2)).toEqual(_addSquare(1, 2));
		});
	});
});
