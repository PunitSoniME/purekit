import _forIn from 'lodash/forIn';
import { forIn } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('forIn', () => {
		it('forIn()', () => {
			let dataToCompare: string[] = [];
			let _dataToCompare: string[] = [];

			//  @ts-ignore
			forIn(new Foo(), function (_: any, key: string) {
				dataToCompare.push(key.toString());
			});

			//  @ts-ignore
			_forIn(new Foo(), function (_: any, key: string) {
				_dataToCompare.push(key.toString());
			});

			expect(dataToCompare).toEqual(_dataToCompare);
		});
	});
});
