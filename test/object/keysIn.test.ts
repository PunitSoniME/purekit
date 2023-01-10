import _keysIn from 'lodash/keysIn';
import { keysIn } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('keysIn', () => {
		it('keysIn(new Foo())', () => {
			//	@ts-ignore
			expect(keysIn(new Foo())).toEqual(_keysIn(new Foo()));
		});
	});
});
