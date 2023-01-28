import _mapKeys from 'lodash/mapKeys';
import { mapKeys } from '../../src/object';

const predicate = (value: any, key: any) => key + value;

describe('Object', () => {
	describe('mapKeys', () => {
		it("mapKeys({ 'a': 1, 'b': 2 }, predicate)", () => {
			expect(mapKeys({ a: 1, b: 2 }, predicate)).toEqual(
				_mapKeys({ a: 1, b: 2 }, predicate)
			);
		});
	});
});
