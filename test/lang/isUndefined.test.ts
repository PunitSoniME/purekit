import _isUndefined from 'lodash/isUndefined';
import { isUndefined } from '../../src/lang';

describe('Lang', () => {
	describe('isUndefined', () => {
		it('isUndefined(void 0)', () => {
			expect(isUndefined(void 0)).toEqual(_isUndefined(void 0));
		});

		it('isUndefined(null)', () => {
			expect(isUndefined(null)).toEqual(_isUndefined(null));
		});
	});
});
