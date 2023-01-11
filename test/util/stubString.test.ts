import { stubString as _stubString } from 'lodash';
import { stubString } from '../../src/util';

describe('Util', () => {
	describe('stubString', () => {
		it('stubString()', () => {
			expect(stubString()).toEqual(_stubString());
		});
	});
});
