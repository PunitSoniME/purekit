import _isWeakMap from 'lodash/isWeakMap';
import { isWeakMap } from '../../src/lang';

describe('Lang', () => {
	describe('isWeakMap', () => {
		it('isWeakMap(new Map)', () => {
			expect(isWeakMap(new Map())).toEqual(_isWeakMap(new Map()));
		});

		it('isWeakMap(new WeakMap)', () => {
			expect(isWeakMap(new WeakMap())).toEqual(_isWeakMap(new WeakMap()));
		});
	});
});
