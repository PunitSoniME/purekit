import _toPairsIn from 'lodash/toPairsIn';
import { toPairsIn } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('toPairsIn', () => {
		it('toPairsIn(new Foo)', () => {
			//	@ts-ignore
			expect(toPairsIn(new Foo())).toEqual(_toPairsIn(new Foo()));
		});
	});
});
