import _trimEnd from 'lodash/trimEnd';
import { trimEnd } from '../../src/string';

describe('String', () => {
	describe('trimEnd', () => {
		it("trimEnd('  abc  ')", () => {
			expect(trimEnd('  abc  ')).toEqual(_trimEnd('  abc  '));
		});

		it("trimEnd('-_-abc-_-', '_-')", () => {
			expect(trimEnd('-_-abc-_-', '_-')).toEqual(_trimEnd('-_-abc-_-', '_-'));
		});
	});
});
