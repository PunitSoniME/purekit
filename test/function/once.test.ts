import _once from 'lodash/once';
import { once } from '../../src/function';

describe('Function', () => {
	describe('once', () => {
		it('once(numbers)', () => {
			const fn = () => {
				return 2;
			};

			const initialize = once(fn);
			initialize();

			const _initialize = _once(fn);
			_initialize();

			expect(initialize()).toEqual(_initialize());
		});
	});
});
