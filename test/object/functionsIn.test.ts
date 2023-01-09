import _functionsIn from 'lodash/functionsIn';
import { functionsIn } from '../../src/object';
import { constant } from '../../src/util';

function Foo() {
	//	@ts-ignore
	this.a = constant('a');
	//	@ts-ignore
	this.b = constant('b');
}

Foo.prototype.c = constant('c');

describe('Object', () => {
	describe('functionsIn', () => {
		it('functionsIn(new Foo)', () => {
			//  @ts-ignore
			expect(functionsIn(new Foo())).toEqual(_functionsIn(new Foo()));
		});
	});
});
