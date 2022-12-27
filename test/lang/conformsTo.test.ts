import _conformsTo from 'lodash/conformsTo';
import { conformsTo } from '../../src/lang';

const object = { a: 1, b: 2 };

describe('Lang', () => {
	describe('conformsTo', () => {
		it("conformsTo(objects, { 'b': (n: number) => n > 1 })", () => {
			const predicate = { b: (n: number) => n > 1 };
			expect(conformsTo(object, predicate)).toEqual(
				_conformsTo(object, predicate as any)
			);
		});

		it("conformsTo(objects, { 'b': (n: number) => n > 2 })", () => {
			const predicate = { b: (n: number) => n > 2 };
			expect(conformsTo(object, predicate)).toEqual(
				_conformsTo(object, predicate as any)
			);
		});
	});
});
