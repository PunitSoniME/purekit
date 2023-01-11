import { stubFalse as _stubFalse } from 'lodash';
import { stubFalse } from '../../src/util';

describe('Util', () => {
	describe('stubFalse', () => {
		it('stubFalse()', () => {
			expect(stubFalse()).toEqual(_stubFalse());
		});
	});
});
