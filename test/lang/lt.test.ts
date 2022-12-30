import _lt from 'lodash/lt';
import { lt } from '../../src/lang';

describe('Lang', () => {
	describe('lt', () => {
		it('lt(3, 1)', () => {
			expect(lt(3, 1)).toEqual(_lt(3, 1));
		});

		it('lt(3, 3)', () => {
			expect(lt(3, 3)).toEqual(_lt(3, 3));
		});

		it('lt(1, 3)', () => {
			expect(lt(1, 3)).toEqual(_lt(1, 3));
		});
	});
});
