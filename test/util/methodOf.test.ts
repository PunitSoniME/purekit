import _methodOf from 'lodash/methodOf';
import _constant from 'lodash/constant';
import _map from 'lodash/map';
import _times from 'lodash/times';
import { constant, methodOf, times } from '../../src/util';
import { map } from '../../src/collection';

const array = times(3, constant),
	object = { a: array, b: array, c: array };

const _array = _times(3, _constant),
	_object = { a: _array, b: _array, c: _array };

describe('Util', () => {
	describe('methodOf', () => {
		it("map(['a[2]', 'c[0]'], methodOf(object))", () => {
			expect(map(['a[2]', 'c[0]'], methodOf(object))).toEqual(
				_map(['a[2]', 'c[0]'], _methodOf(_object))
			);
		});

		it("map([['a', '2'], ['c', '0']], methodOf(object))", () => {
			expect(
				map(
					[
						['a', '2'],
						['c', '0'],
					],
					methodOf(object)
				)
			).toEqual(
				_map(
					[
						['a', '2'],
						['c', '0'],
					],
					_methodOf(_object)
				)
			);
		});
	});
});
