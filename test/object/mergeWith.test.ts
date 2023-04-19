import _mergeWith from 'lodash/mergeWith';
import { mergeWith } from '../../src/object';

describe('Object', () => {
	describe('mergeWith', () => {
		it('mergeWith(object, other, customizer) - Merge arrays using a customizer function', () => {
			function customizer(objValue: any, srcValue: any) {
				if (Array.isArray(objValue)) {
					return objValue.concat(srcValue);
				}
				return undefined;
			}

			const object = { a: [1], b: [2] };
			const other = { a: [3], b: [4] };
			const merged = mergeWith(object, other, customizer);
			//	=>	{ 'a': [1, 3], 'b': [2, 4] }

			const _object = { a: [1], b: [2] };
			const _other = { a: [3], b: [4] };
			const _merged = _mergeWith(_object, _other, customizer);

			expect(merged).toEqual(_merged);
		});

		it('mergeWith(object, other, customizer) - Merge objects using a customizer function', () => {
			function customizer(objValue: any, srcValue: any) {
				if (
					typeof objValue === 'object' &&
					typeof srcValue === 'object' &&
					objValue !== null &&
					srcValue !== null
				) {
					return mergeWith(objValue, customizer, srcValue);
				}
				return undefined;
			}

			const object = { a: { x: 1 }, b: { y: 2 } };
			const other = { a: { y: 3 }, b: { z: 4 } };
			const merged = mergeWith(object, other, customizer);
			//	=>	{ 'a': { 'x': 1, 'y': 3 }, 'b': { 'y': 2, 'z': 4 } }

			const _object = { a: { x: 1 }, b: { y: 2 } };
			const _other = { a: { y: 3 }, b: { z: 4 } };
			const _merged = _mergeWith(_object, _other, customizer);

			expect(merged).toEqual(_merged);
		});
	});
});
