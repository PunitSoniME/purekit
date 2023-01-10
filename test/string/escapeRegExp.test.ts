import _escapeRegExp from 'lodash/escapeRegExp';
import { escapeRegExp } from '../../src/string';

const regExpString = '[portfolio](https://github.com/punitsonime/)';

describe('String', () => {
	describe('escapeRegExp', () => {
		it(`escapeRegExp(${regExpString})`, () => {
			expect(escapeRegExp(regExpString)).toEqual(_escapeRegExp(regExpString));
		});
	});
});
