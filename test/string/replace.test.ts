import _replace from 'lodash/replace';
import { replace } from '../../src/string';

describe('String', () => {
	describe('replace', () => {
		it("replace('Hi Fred', 'Fred', 'Barney')", () => {
			expect(replace('Hi Fred', 'Fred', 'Barney')).toEqual(
				_replace('Hi Fred', 'Fred', 'Barney')
			);
		});
	});
});
