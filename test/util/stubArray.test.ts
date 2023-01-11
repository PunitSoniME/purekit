import { stubArray as _stubArray } from 'lodash';
import { stubArray } from '../../src/util';

describe('Util', () => {
	describe('stubArray', () => {
		it('stubArray()', () => {
			expect(stubArray()).toEqual(_stubArray());
		});
	});
});
