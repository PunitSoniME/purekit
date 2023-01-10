import _valuesIn from 'lodash/valuesIn';
import { valuesIn } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('valuesIn', () => {
		it('valuesIn(new Foo)', () => {
			//	@ts-ignore
			expect(valuesIn(new Foo())).toEqual(_valuesIn(new Foo()));
		});

		it("valuesIn('hi')", () => {
			expect(valuesIn('hi')).toEqual(_valuesIn('hi'));
		});
	});
});
