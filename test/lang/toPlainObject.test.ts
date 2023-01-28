import _toPlainObject from 'lodash/toPlainObject';
import _assign from 'lodash/assign';
import { toPlainObject } from '../../src/lang';
import { assign } from '../../src/object';

function Foo() {
	//  @ts-ignore
	this.b = 2;
}
Foo.prototype.c = 3;
//  @ts-ignore
assign({ a: 1 }, new Foo());
// => { 'a': 1, 'b': 2 }

function _Foo() {
	//  @ts-ignore
	this.b = 2;
}
_Foo.prototype.c = 3;
//  @ts-ignore
_assign({ a: 1 }, new _Foo());
// => { 'a': 1, 'b': 2 }

describe('Lang', () => {
	describe('toPlainObject', () => {
		it("assign({ 'a': 1 }, _.toPlainObject(new Foo)", () => {
			//  @ts-ignore
			const result = assign({ a: 1 }, toPlainObject(new Foo()));
			//  @ts-ignore
			const _result = _assign({ a: 1 }, _toPlainObject(new _Foo()));

			expect(result).toEqual(_result);
		});
	});
});
