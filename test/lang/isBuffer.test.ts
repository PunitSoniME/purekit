import _isBuffer from 'lodash/isBuffer';
import { isBuffer } from '../../src/lang';

describe('Lang', () => {
	describe('isBuffer', () => {
		it('isBuffer(Buffer.alloc(2))', () => {
			expect(isBuffer(Buffer.alloc(2))).toEqual(_isBuffer(Buffer.alloc(2)));
		});

		it('isBuffer(new Uint8Array(2))', () => {
			expect(isBuffer(new Uint8Array(2))).toEqual(_isBuffer(new Uint8Array(2)));
		});

	});
});
