import _sortBy from 'lodash/sortBy';
import { sortBy } from '../../src/collection';

const users = [
	{ 'user': 'fred', 'age': 48 },
	{ 'user': 'barney', 'age': 36 },
	{ 'user': 'fred', 'age': 40 },
	{ 'user': 'barney', 'age': 34 }
];

describe('Collection', () => {
	describe('sortBy', () => {
		it("sortBy(users, [function(o) { return o.user; }])", () => {
			expect(sortBy(users, [function(o: any) { return o.user; }])).toEqual(_sortBy(users, [function(o: any) { return o.user; }]));
		});

		it("sortBy(users, ['user', 'age'])", () => {
			expect(sortBy(users, ['user', 'age'])).toEqual(_sortBy(users, ['user', 'age']));
		});
	});
});
``