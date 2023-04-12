import _toArray from 'lodash/toArray';
import { toArray } from '../../src/lang';

describe('Lang', () => {
	describe('toArray', () => {
		it("toArray({ 'a': 1, 'b': 2 })", () => {
			expect(toArray({ a: 1, b: 2 })).toEqual(_toArray({ a: 1, b: 2 }));
		});

		it("toArray('abc')", () => {
			expect(toArray('abc')).toEqual(_toArray('abc'));
		});

		it('toArray(1)', () => {
			expect(toArray(1)).toEqual(_toArray(1));
		});

		it('toArray(null)', () => {
			expect(toArray(null)).toEqual(_toArray(null));
		});
	});
});
