import { stubTrue as _stubTrue } from 'lodash';
import { stubTrue } from '../../src/util';

describe('Util', () => {
	describe('stubTrue', () => {
		it('stubTrue()', () => {
			expect(stubTrue()).toEqual(_stubTrue());
		});
	});
});
