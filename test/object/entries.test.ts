import _entries from 'lodash/entries';
import { entries } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('entries', () => {
		it('entries(new Foo())', () => {
			//	@ts-ignore
			expect(entries(new Foo())).toEqual(_entries(new Foo()));
		});
	});
});
