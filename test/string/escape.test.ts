import _escape from 'lodash/escape';
import { escape } from '../../src/string';

describe('String', () => {
	describe('escape', () => {
		it("escape('fred, barney, & pebbles')", () => {
			expect(escape('fred, barney, & pebbles')).toEqual(
				_escape('fred, barney, & pebbles')
			);
		});
	});
});
