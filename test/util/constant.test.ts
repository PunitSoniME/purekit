import _constant from 'lodash/constant';
import { constant } from '../../src/util';

describe('Util', () => {
	describe('constant', () => {
		it('constant(42)', () => {
			const constantValue = constant(42);
			const _constantValue = _constant(42);
			expect(constantValue()).toEqual(_constantValue());
		});
	});
});
