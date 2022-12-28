import _isArrayBuffer from 'lodash/isArrayBuffer';
import { isArrayBuffer } from '../../src/lang';

describe('Lang', () => {
	describe('isArrayBuffer', () => {
		it('isArrayBuffer(new ArrayBuffer(2))', () => {
			expect(isArrayBuffer(new ArrayBuffer(2))).toEqual(
				_isArrayBuffer(new ArrayBuffer(2))
			);
		});

		it('isArrayBuffer(new Array(2))', () => {
			expect(isArrayBuffer(new Array(2))).toEqual(_isArrayBuffer(new Array(2)));
		});
	});
});
