import _words from 'lodash/words';
import { words } from '../../src/string';

describe('String', () => {
	describe('words', () => {
		it("words('fred, barney, & pebbles')", () => {
			expect(words('fred, barney, & pebbles')).toEqual(
				_words('fred, barney, & pebbles')
			);
		});

		it("words('fred, barney, & pebbles', /[^, ]+/g)", () => {
			const regExp = /[^, ]+/g;
			expect(words('fred, barney, & pebbles', regExp)).toEqual(
				_words('fred, barney, & pebbles', regExp)
			);
		});
	});
});
