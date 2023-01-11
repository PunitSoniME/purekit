import _property from 'lodash/property';
import _map from 'lodash/map';
// import _sortBy from 'lodash/sortBy';
import { property } from '../../src/util';
import { map } from '../../src/collection';
// import { sortBy } from '../../src/collection';

const objects = [{ a: { b: 2 } }, { a: { b: 1 } }];

describe('Util', () => {
	describe('property', () => {
		it("map(objects, property('a.b')", () => {
			expect(map(objects, property('a.b'))).toEqual(
				_map(objects, _property('a.b'))
			);
		});

		// it("map(sortBy(objects, objects, property('a.b')))", () => {
		// 	expect(map(sortBy(objects, objects, property('a.b')))).toEqual(_map(_sortBy(objects, objects, property('a.b'))));
		// });
	});
});
