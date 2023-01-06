import _assign from 'lodash/assign';
import { assign } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 3;
}
function Bar() {
	//	@ts-ignore
	this.c = 5;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;

describe('Object', () => {
	describe('assign', () => {
		it("assign({ 'a': 0 }, new Foo, new Bar)", () => {
			//	@ts-ignore
			expect(assign({ a: 0 }, new Foo(), new Bar())).toEqual(
				_assign({ a: 0 }, new Foo(), new Bar())
			);
		});
	});
});
