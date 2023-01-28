import _invokeMap from 'lodash/invokeMap';
import { invokeMap } from '../../src/collection';

describe('Collection', () => {
	describe('invokeMap', () => {
		it("invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')", () => {
			expect(
				invokeMap(
					[
						[5, 1, 7],
						[3, 2, 1],
					],
					'sort'
				)
			).toEqual(
				_invokeMap(
					[
						[5, 1, 7],
						[3, 2, 1],
					],
					'sort'
				)
			);
		});

		it("invokeMap([123, 456], String.prototype.split, '')", () => {
			expect(invokeMap([123, 456], String.prototype.split, '')).toEqual(
				_invokeMap([123, 456], String.prototype.split, '')
			);
		});

		it('invokeMap - with arguments', () => {
			//	@ts-ignore
			const array = [
				function () {
					return Array.prototype.slice.call(arguments);
				},
			];
			const result = invokeMap(array, 'call', null, 'a', 'b', 'c');
			const _result = _invokeMap(array, 'call', null, 'a', 'b', 'c');

			expect(result).toEqual(_result); //	[['a', 'b', 'c']]
		});

		it('invokeMap - with function', () => {
			const array = ['a', 'b', 'c'];
			const predicate = function (left: string, right: string) {
				//	@ts-ignore
				return left + this.toUpperCase() + right;
			};
			const result = invokeMap(array, predicate, '(', ')');
			const _result = _invokeMap(array, predicate, '(', ')');

			expect(result).toEqual(_result); //	['(A)', '(B)', '(C)']
		});

		it('invokeMap - with object', () => {
			const object = { a: 1, b: 2, c: 3 };
			const result = invokeMap(object, 'toFixed', 1);
			const _result = _invokeMap(object, 'toFixed', 1);

			expect(result).toEqual(_result); //	['1.0', '2.0', '3.0']
		});

		it('invokeMap - with object', () => {
			const object = { a: 1, b: 2, c: 3 };
			const result = invokeMap(object, 'toFixed', 1);
			const _result = _invokeMap(object, 'toFixed', 1);

			expect(result).toEqual(_result); //	['1.0', '2.0', '3.0']
		});

		it('invokeMap - return empty array if value is neither array nor object', () => {
			//	@ts-ignore
			expect(invokeMap(1)).toEqual(_invokeMap(1)); //	[]
		});

		it('invokeMap - should not give error on nullish elements', () => {
			const array = ['a', null, undefined, 'd'];

			let result: any;
			let _result: any;

			try {
				result = invokeMap(array, 'toUpperCase');
			} catch (e) {}

			try {
				_result = _invokeMap(array, 'toUpperCase');
			} catch (e) {}

			expect(result).toEqual(_result); //	['A', undefined, undefined, 'D']
		});

		it('invokeMap - array in path', function () {
			//	@ts-ignore
			const object = { a: { b: 2, c: 1 } };

			['a.b', ['a', 'b']].forEach(function (path: any) {
				expect(invokeMap([object], path)).toEqual([2]);
			});
		});
	});
});
