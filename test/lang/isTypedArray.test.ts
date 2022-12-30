import _isTypedArray from 'lodash/isTypedArray';
import { isTypedArray } from '../../src/lang';

describe('Lang', () => {
	describe('isTypedArray', () => {
		it('isTypedArray(new Uint8Array)', () => {
			expect(isTypedArray(new Uint8Array())).toEqual(
				_isTypedArray(new Uint8Array())
			);
		});

		it('isTypedArray([])', () => {
			expect(isTypedArray([])).toEqual(_isTypedArray([]));
		});
	});
});
