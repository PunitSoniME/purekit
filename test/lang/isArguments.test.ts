import _isArguments from 'lodash/isArguments';
import { isArguments } from '../../src/lang';

const fn = (function () {
	return arguments;
})();

describe('Lang', () => {
	describe('isArguments', () => {
		it('isArguments(fn)', () => {
			expect(isArguments(fn)).toEqual(_isArguments(fn));
		});

		it('isArguments([1, 2, 3])', () => {
			expect(isArguments([1, 2, 3])).toEqual(_isArguments([1, 2, 3]));
		});
	});
});
