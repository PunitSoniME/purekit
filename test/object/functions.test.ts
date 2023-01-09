import _functions from 'lodash/functions';
import { functions } from '../../src/object';
import { constant } from '../../src/util';

function Foo() {
	//	@ts-ignore
	this.a = constant('a');
	//	@ts-ignore
	this.b = constant('b');
}

Foo.prototype.c = constant('c');

describe('Object', () => {
	describe('functions', () => {
		it('functions(new Foo)', () => {
			//  @ts-ignore
			expect(functions(new Foo())).toEqual(_functions(new Foo()));
		});
	});
});
