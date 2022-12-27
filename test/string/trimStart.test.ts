import _trimStart from 'lodash/trimStart';
import { trimStart } from '../../src/string';

describe('String', () => {
	describe('trimStart', () => {
		it("trimStart('  abc  ')", () => {
			expect(trimStart('  abc  ')).toEqual(_trimStart('  abc  '));
		});

		it("trimStart('-_-abc-_-', '_-')", () => {
			expect(trimStart('-_-abc-_-', '_-')).toEqual(
				_trimStart('-_-abc-_-', '_-')
			);
		});
	});
});
