import _method from 'lodash/method';
import _constant from 'lodash/constant';
import _map from 'lodash/map';
import { constant, method } from '../../src/util';
import { map } from '../../src/collection';

var objects = [{ a: { b: constant(2) } }, { a: { b: constant(1) } }];

var _objects = [{ a: { b: _constant(2) } }, { a: { b: _constant(1) } }];

describe('Util', () => {
	describe('method', () => {
		it("method('a.b')", () => {
			expect(map(objects, method('a.b'))).toEqual(
				_map(_objects, _method('a.b'))
			);
		});

		it("method(['a', 'b'])", () => {
			expect(map(objects, method(['a', 'b']))).toEqual(
				_map(_objects, _method(['a', 'b']))
			);
		});
	});
});
