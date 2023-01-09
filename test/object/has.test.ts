import _has from 'lodash/has';
import { has } from '../../src/object';

const object = { a: { bar: 2 } };

describe('Object', () => {
	describe('has', () => {
		it("has(object, 'a')", () => {
			expect(has(object, 'a')).toEqual(_has(object, 'a'));
		});

		it("has(object, 'a.bar')", () => {
			expect(has(object, 'a.bar')).toEqual(_has(object, 'a.bar'));
		});

		it("has(object, ['a', 'bar'])", () => {
			expect(has(object, ['a', 'bar'])).toEqual(_has(object, ['a', 'bar']));
		});

		it("has(object, ['a', 'c'])", () => {
			expect(has(object, ['a', 'c'])).toEqual(_has(object, ['a', 'c']));
		});

		it("has(object, 'bar')", () => {
			expect(has(object, 'bar')).toEqual(_has(object, 'bar'));
		});
	});
});
