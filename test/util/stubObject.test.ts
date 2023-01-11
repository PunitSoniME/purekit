import { stubObject as _stubObject } from 'lodash';
import { stubObject } from '../../src/util';

describe('Util', () => {
	describe('stubObject', () => {
		it('stubObject()', () => {
			expect(stubObject()).toEqual(_stubObject());
		});
	});
});
