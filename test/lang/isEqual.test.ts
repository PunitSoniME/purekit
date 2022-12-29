import _isEqual from 'lodash/isEqual';
import { isEqual } from '../../src/lang';

var object = { a: 1 };
var other = { a: 1 };

describe('Lang', () => {
	describe('isEqual', () => {
		it('isEqual(object, other)', () => {
			expect(isEqual(object, other)).toEqual(_isEqual(object, other));
		});
	});
});
