import _isNative from 'lodash/isNative';
import { isNative } from '../../src/lang';

describe('Lang', () => {
	describe('isNative', () => {
		it('isNative(Array.prototype.push)', () => {
			expect(isNative(Array.prototype.push)).toEqual(
				_isNative(Array.prototype.push)
			);
		});

		it('isNative(Number)', () => {
			expect(isNative(Number)).toEqual(_isNative(Number));
		});
	});
});
