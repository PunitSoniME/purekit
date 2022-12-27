import _capitalize from 'lodash/capitalize';
import { capitalize } from '../../src/string';

describe('String', () => {
	describe('capitalize', () => {
		it('capitalize("FRED")', () => {
			const str = 'FRED';
			expect(capitalize(str)).toEqual(_capitalize(str));
		});
	});
});
