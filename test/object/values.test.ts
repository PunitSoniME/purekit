import _values from 'lodash/values';
import { values } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('values', () => {
		it('values(new Foo)', () => {
			//	@ts-ignore
			expect(values(new Foo())).toEqual(_values(new Foo()));
		});

		it("values('hi')", () => {
			expect(values('hi')).toEqual(_values('hi'));
		});
	});
});
