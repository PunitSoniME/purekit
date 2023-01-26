import _has from 'lodash/has';
import _create from 'lodash/create';
import { has, create } from '../../src/object';

const object = { a: { b: 2 } };

const other = create({ a: create({ b: 2 }) });
const _other = _create({ a: _create({ b: 2 }) });

describe('Object', () => {
	describe('has', () => {
		it("has(object, 'a')", () => {
			expect(has(object, 'a')).toEqual(_has(object, 'a'));
		});

		it("has(object, 'a.b')", () => {
			expect(has(object, 'a.b')).toEqual(_has(object, 'a.b'));
		});

		it("has(object, ['a', 'b'])", () => {
			expect(has(object, ['a', 'b'])).toEqual(_has(object, ['a', 'b']));
		});

		it("has(object, ['a', 'c'])", () => {
			expect(has(object, ['a', 'c'])).toEqual(_has(object, ['a', 'c']));
		});

		it("has(object, 'b')", () => {
			expect(has(object, 'b')).toEqual(_has(object, 'b'));
		});

		it("has(other, 'a')", () => {
			expect(has(other, 'a')).toEqual(_has(_other, 'a'));
		});
	});
});
