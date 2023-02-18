import _unescape from 'lodash/unescape';
import { unescape } from '../../src/string';

const str1 = 'fred, barney, &amp; pebbles';
const str2 =
	'&lt;a href=&quot;https://www.example.com&quot;&gt;Example&lt;/a&gt;';

describe('String', () => {
	describe('unescape', () => {
		it(`unescape("${str1}")`, () => {
			expect(unescape(str1)).toEqual(_unescape(str1));
		});

		it(`unescape("${str2}")`, () => {
			expect(unescape(str2)).toEqual(_unescape(str2));
		});
	});
});
