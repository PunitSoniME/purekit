import _isObjectLike from 'lodash/isObjectLike';
import { isObjectLike } from '../../src/lang';

describe('Lang', () => {
	describe('isObjectLike', () => {
		it('isObjectLike({})', () => {
			expect(isObjectLike({})).toEqual(_isObjectLike({}));
		});

		it('isObjectLike([1, 2, 3])', () => {
			expect(isObjectLike([1, 2, 3])).toEqual(_isObjectLike([1, 2, 3]));
		});

		it('isObjectLike(null)', () => {
			expect(isObjectLike(null)).toEqual(_isObjectLike(null));
		});
	});
});
