import _keys from 'lodash/keys';
import { keys } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('keys', () => {
		it('keys(new Foo())', () => {
			//	@ts-ignore
			expect(keys(new Foo())).toEqual(_keys(new Foo()));
		});

		it("keys('hi')", () => {
			expect(keys('hi')).toEqual(_keys('hi'));
		});
	});
});
