import { capitalize as _capitalize } from 'lodash';
import { capitalize } from '../../src/string';

describe('String', () => {
	describe('capitalize', () => {
		it('capitalize("FRED")', () => {
			const str = 'FRED';
			expect(capitalize(str)).toEqual(_capitalize(str));
		});
	});
});
