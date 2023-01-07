import _extend from 'lodash/extend';
import { extend } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
}
function Bar() {
	//	@ts-ignore
	this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;

describe('Object', () => {
	describe('extend', () => {
		it('extend({ a: 0 }, new (Foo as any), new (Bar as any))', () => {
			expect(extend({ a: 0 }, new (Foo as any)(), new (Bar as any)())).toEqual(
				_extend({ a: 0 }, new (Foo as any)(), new (Bar as any)())
			);
		});
	});
});
