import _isNull from 'lodash/isNull';
import { isNull } from '../../src/lang';

describe('Lang', () => {
	describe('isNull', () => {
		it('isNull(null)', () => {
			expect(isNull(null)).toEqual(_isNull(null));
		});

		it('isNull(void 0)', () => {
			expect(isNull(void 0)).toEqual(_isNull(void 0));
		});
	});
});
