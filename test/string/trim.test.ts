import _trim from 'lodash/trim';
import _map from 'lodash/map';
import { trim } from '../../src/string';
import { map } from '../../src/collection';

describe('String', () => {
	describe('trim', () => {
		it("trim('  abc  ')", () => {
			expect(trim('  abc  ')).toEqual(_trim('  abc  '));
		});

		it("trim('-_-abc-_-', '_-')", () => {
			expect(trim('-_-abc-_-', '_-')).toEqual(_trim('-_-abc-_-', '_-'));
		});

		it("trim('__FOO_BAR__')", () => {
			expect(map(['  foo  ', '  bar  '], trim)).toEqual(
				_map(['  foo  ', '  bar  '], _trim)
			);
		});
	});
});
