import _isNil from 'lodash/isNil';
import { isNil } from '../../src/lang';

describe('Lang', () => {
	describe('isNil', () => {
		it('isNil(null)', () => {
			expect(isNil(null)).toEqual(_isNil(null));
		});

		it('isNil(void 0)', () => {
			expect(isNil(void 0)).toEqual(_isNil(void 0));
		});

		it('isNil(NaN)', () => {
			expect(isNil(NaN)).toEqual(_isNil(NaN));
		});
	});
});
