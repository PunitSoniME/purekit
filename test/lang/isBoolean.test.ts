import _isBoolean from 'lodash/isBoolean';
import { isBoolean } from '../../src/lang';

describe('Lang', () => {
	describe('isBoolean', () => {
		it('isBoolean(false)', () => {
			expect(isBoolean(false)).toEqual(_isBoolean(false));
		});

		it('isBoolean(null)', () => {
			expect(isBoolean(null)).toEqual(_isBoolean(null));
		});

		it('isBoolean("")', () => {
			expect(isBoolean('')).toEqual(_isBoolean(''));
		});

		it('isBoolean([])', () => {
			expect(isBoolean([])).toEqual(_isBoolean([]));
		});

		it('isBoolean(1)', () => {
			expect(isBoolean(1)).toEqual(_isBoolean(1));
		});
	});
});
