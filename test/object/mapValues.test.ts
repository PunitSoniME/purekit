import _mapValues from 'lodash/mapValues';
import { mapValues } from '../../src/object';

const users = {
	fred: { user: 'fred', age: 40 },
	pebbles: { user: 'pebbles', age: 1 },
};
const predicate = (o: any) => {
	return o.age;
};

describe('Object', () => {
	describe('mapValues', () => {
		it('mapValues(users, predicate)', () => {
			expect(mapValues(users, predicate)).toEqual(_mapValues(users, predicate));
		});

		it("mapValues(users, 'age')", () => {
			expect(mapValues(users, 'age')).toEqual(_mapValues(users, 'age'));
		});
	});
});
