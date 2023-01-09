import _get from 'lodash/get';
import { get } from '../../src/object';

const simpleObject = { a: { b: 2 } };
const complexObject = { a: [{ bar: { c: 3 } }] };
const falsyObject = { a: null, b: undefined, c: 0 };

describe('Object', () => {
	describe('get', () => {
		it("get(simpleObject, 'a.b')", () => {
			expect(get(simpleObject, 'a.b')).toEqual(_get(simpleObject, 'a.b'));
		});

		it("get(complexObject, 'a[0].bar.c')", () => {
			expect(get(complexObject, 'a[0].bar.c')).toEqual(
				_get(complexObject, 'a[0].bar.c')
			);
		});

		it("get(complexObject, ['a', '0', 'bar', 'c'])", () => {
			expect(get(complexObject, ['a', '0', 'bar', 'c'])).toEqual(
				_get(complexObject, ['a', '0', 'bar', 'c'])
			);
		});

		it("get(simpleObject, 'a.bar.c', 'default')", () => {
			expect(get(simpleObject, 'a.bar.c', 'default')).toEqual(
				_get(simpleObject, 'a.bar.c', 'default')
			);
		});

		it("get(complexObject, 'a.bar.c', 'default')", () => {
			expect(get(complexObject, 'a.bar.c', 'default')).toEqual(
				_get(complexObject, 'a.bar.c', 'default')
			);
		});

		it('get(complexObject, null)', () => {
			//	@ts-ignore
			expect(get(complexObject, null)).toEqual(_get(complexObject, null));
		});

		it("get(falsyObject, 'a', 'default')", () => {
			expect(get(falsyObject, 'a', 'default')).toEqual(
				_get(falsyObject, 'a', 'default')
			);
		});

		it("get(falsyObject, 'b', 'default')", () => {
			expect(get(falsyObject, 'b', 'default')).toEqual(
				_get(falsyObject, 'b', 'default')
			);
		});

		it("get(falsyObject, 'c', 'default')", () => {
			expect(get(falsyObject, 'c', 'default')).toEqual(
				_get(falsyObject, 'c', 'default')
			);
		});
	});
});
