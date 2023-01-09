import _forOwn from 'lodash/forOwn';
import { forOwn } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('forOwn', () => {
		it('forOwn()', () => {
			let dataToCompare: string[] = [];
			let _dataToCompare: string[] = [];

			//  @ts-ignore
			forOwn(new Foo(), function (_: any, key: string) {
				dataToCompare.push(key.toString());
			});

			//  @ts-ignore
			_forOwn(new Foo(), function (_: any, key: string) {
				_dataToCompare.push(key.toString());
			});

			expect(dataToCompare).toEqual(_dataToCompare);
		});
	});
});
