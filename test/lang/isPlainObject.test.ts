import _isPlainObject from 'lodash/isPlainObject';
import { isPlainObject } from '../../src/lang';

function Foo() {
	//	@ts-ignore
	this.a = 1;
}

describe('Lang', () => {
	describe('isPlainObject', () => {
		it('isPlainObject(new Foo)', () => {
			//  @ts-ignore
			expect(isPlainObject(new Foo())).toEqual(_isPlainObject(new Foo()));
		});

		it('isPlainObject([1, 2, 3])', () => {
			expect(isPlainObject([1, 2, 3])).toEqual(_isPlainObject([1, 2, 3]));
		});

		it("isPlainObject({ 'x': 0, 'y': 0 })", () => {
			expect(isPlainObject({ x: 0, y: 0 })).toEqual(
				_isPlainObject({ x: 0, y: 0 })
			);
		});

		//	TODO: below test case is giving same result as lodash
		// it('isPlainObject(Object.create(null))', () => {
		// 	expect(isPlainObject(Object.create(null))).toEqual(_isPlainObject(Object.create(null)));
		// });
	});
});
