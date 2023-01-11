import _noop from 'lodash/noop';
import { noop } from '../../src/util';

describe('Util', () => {
	describe('noop', () => {
		it('noop()', () => {
			expect(noop()).toEqual(_noop());
		});
	});
});
