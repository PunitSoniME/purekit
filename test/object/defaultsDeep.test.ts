import _defaultsDeep from 'lodash/defaultsDeep';
import { defaultsDeep } from '../../src/object';

describe('Object', () => {
	describe('defaultsDeep', () => {
		it("defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } })", () => {
			expect(defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } })).toEqual(
				_defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } })
			);
		});
	});
});
