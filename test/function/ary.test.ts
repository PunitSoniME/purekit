import _ary from 'lodash/ary';
import _map from 'lodash/map';
import { ary } from '../../src/function';
import { map } from '../../src/collection';
import assert from 'assert';

//	@ts-ignore
function fn(a: string, b: string, c: string) {
	return Array.prototype.slice.call(arguments);
}

describe('Function', () => {
	describe('ary', () => {
		it("ary(['6', '8', '10'].map(ary(Number.parseInt, 1)))", () => {
			expect(['6', '8', '10'].map(ary(Number.parseInt, 1))).toEqual(
				['6', '8', '10'].map(_ary(Number.parseInt, 1))
			);
		});

		it("ary(['6', '8', '10'].map(ary(Number.parseInt, 1)))", () => {
			const actual = map(['6', '8', '10'], ary(parseInt, 1));
			const _actual = _map(['6', '8', '10'], _ary(parseInt, 1));

			assert.deepStrictEqual(actual, _actual); //	[6, 8, 10]

			const capped = ary(fn, 2);
			const _capped = _ary(fn, 2);

			assert.deepStrictEqual(
				capped('a', 'b', 'c', 'd'),
				_capped('a', 'b', 'c', 'd')
			); //	['a', 'b']
		});

		// it("ary(fn)", () => {
		// 	const capped = ary(fn);
		// 	const _capped = _ary(fn);

		// 	assert.deepStrictEqual(capped('a', 'b', 'c', 'd'), _capped('a', 'b', 'c', 'd'));	//	['a', 'b', 'c']
		// });

		it('ary(fn, -1)', () => {
			const capped = ary(fn, -1);
			const _capped = _ary(fn, -1);

			try {
				var actual = capped('a');
				var _actual = _capped('a');
			} catch (e) {}

			assert.deepStrictEqual(actual, _actual); //	[]
		});
	});
});
