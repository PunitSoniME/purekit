import _split from 'lodash/split';
import { split } from '../../src/string';

describe('String', () => {
	describe('split', () => {
		it("split('a-b-c', '-', 2)", () => {
			expect(split('a-b-c', '-', 2)).toEqual(_split('a-b-c', '-', 2));
		});
	});
});
