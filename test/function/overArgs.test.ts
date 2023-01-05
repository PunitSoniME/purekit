import _overArgs from 'lodash/overArgs';
import { overArgs } from '../../src/function';

function doubled(n: number) {
	return n * 2;
}

function square(n: number) {
	return n * n;
}

var func = overArgs(
	function (x: number, y: number) {
		return [x, y];
	},
	[square, doubled]
);

var _func = _overArgs(
	function (x: number, y: number) {
		return [x, y];
	},
	[square, doubled]
);

describe('Function', () => {
	describe('overArgs', () => {
		it('func(9, 3)', () => {
			expect(func(9, 3)).toEqual(_func(9, 3));
		});

		it('func(10, 5)', () => {
			expect(func(10, 5)).toEqual(_func(10, 5));
		});
	});
});
