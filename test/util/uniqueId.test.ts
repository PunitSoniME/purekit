import { uniqueId as _uniqueId } from 'lodash';
import { uniqueId } from '../../src/util';

describe('Util', () => {
	describe('uniqueId', () => {
		it("uniqueId('contact_)", () => {
			expect(uniqueId('contact_')).toEqual(_uniqueId('contact_'));
		});

		it('uniqueId()', () => {
			expect(uniqueId()).toEqual(_uniqueId());
		});
	});
});
