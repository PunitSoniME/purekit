import _forOwnRight from 'lodash/forOwnRight';
import { forOwnRight } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
	//	@ts-ignore
	this.b = 2;
}

Foo.prototype.c = 3;

describe('Object', () => {
	describe('forOwnRight', () => {
		it('forOwnRight()', () => {
			let dataToCompare: string[] = [];
			let _dataToCompare: string[] = [];

			//  @ts-ignore
			forOwnRight(new Foo(), function (_: any, key: string) {
				dataToCompare.push(key.toString());
			});

			//  @ts-ignore
			_forOwnRight(new Foo(), function (_: any, key: string) {
				_dataToCompare.push(key.toString());
			});

			expect(dataToCompare).toEqual(_dataToCompare);
		});
	});
});
