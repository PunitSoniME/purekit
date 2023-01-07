import _toPairs from 'lodash/toPairs';
import { toPairs } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('toPairs', () => {
		it('toPairs(new Foo)', () => {
			//	@ts-ignore
			expect(toPairs(new Foo())).toEqual(_toPairs(new Foo()));
		});
	});
});
