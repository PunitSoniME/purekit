import _forInRight from 'lodash/forInRight';
import { forInRight } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('forInRight', () => {
		it('forInRight()', () => {
			let dataToCompare: string[] = [];
			let _dataToCompare: string[] = [];

			//  @ts-ignore
			forInRight(new Foo(), function (_: any, key: string) {
				dataToCompare.push(key.toString());
			});

			//  @ts-ignore
			_forInRight(new Foo(), function (_: any, key: string) {
				_dataToCompare.push(key.toString());
			});

			expect(dataToCompare).toEqual(_dataToCompare);
		});
	});
});
