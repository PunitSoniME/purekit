import _isFunction from 'lodash/isFunction';
import { isFunction } from '../../src/lang';

const arrowFn = () => {};
function regularFn() {}

describe('Lang', () => {
	describe('isFunction', () => {
		it('isFunction(/abc/)', () => {
			expect(isFunction(/abc/)).toEqual(_isFunction(/abc/));
		});

		it('isFunction(arrowFn)', () => {
			expect(isFunction(arrowFn)).toEqual(_isFunction(arrowFn));
		});

		it('isFunction(regularFn)', () => {
			expect(isFunction(regularFn)).toEqual(_isFunction(regularFn));
		});
	});
});
