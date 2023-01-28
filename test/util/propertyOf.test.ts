import _propertyOf from 'lodash/propertyOf';
import _map from 'lodash/map';
import { propertyOf } from '../../src/util';
import { map } from '../../src/collection';

const array = [0, 1, 2],
	object = { a: array, b: array, c: array };

describe('Util', () => {
	describe('propertyOf', () => {
		it("map(['a[2]', 'c[0]'], propertyOf(object))", () => {
			expect(map(['a[2]', 'c[0]'], propertyOf(object))).toEqual(
				_map(['a[2]', 'c[0]'], _propertyOf(object))
			);
		});

		it("map([['a', '2'], ['c', '0']], propertyOf(object))", () => {
			expect(
				map(
					[
						['a', '2'],
						['c', '0'],
					],
					propertyOf(object)
				)
			).toEqual(
				_map(
					[
						['a', '2'],
						['c', '0'],
					],
					_propertyOf(object)
				)
			);
		});
	});
});
