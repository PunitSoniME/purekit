import _isSet from 'lodash/isSet';
import { isSet } from '../../src/lang';

describe('Lang', () => {
	describe('isSet', () => {
		it('isSet(new Set)', () => {
			expect(isSet(new Set())).toEqual(_isSet(new Set()));
		});

		it('isSet(new WeakSet)', () => {
			expect(isSet(new WeakSet())).toEqual(_isSet(new WeakSet()));
		});
	});
});
