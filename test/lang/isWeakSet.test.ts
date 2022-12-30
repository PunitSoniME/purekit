import _isWeakSet from 'lodash/isWeakSet';
import { isWeakSet } from '../../src/lang';

describe('Lang', () => {
	describe('isWeakSet', () => {
		it('isWeakSet(new Set)', () => {
			expect(isWeakSet(new Set())).toEqual(_isWeakSet(new Set()));
		});

		it('isWeakSet(new WeakSet)', () => {
			expect(isWeakSet(new WeakSet())).toEqual(_isWeakSet(new WeakSet()));
		});
	});
});
