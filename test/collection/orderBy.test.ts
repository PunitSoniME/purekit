import _orderBy from 'lodash/orderBy';
import { orderBy } from '../../src/collection';

const users = [
	{ user: 'fred', age: 48 },
	{ user: 'barney', age: 34 },
	{ user: 'fred', age: 40 },
	{ user: 'barney', age: 36 },
];

describe('Collection', () => {
	describe('orderBy', () => {
		it("orderBy(users, ['user', 'age'], ['asc', 'desc'])", () => {
			expect(orderBy(users, ['user', 'age'], ['asc', 'desc'])).toEqual(
				_orderBy(users, ['user', 'age'], ['asc', 'desc'])
			);
		});

		it("orderBy(users, ['age'], ['desc'])", () => {
			expect(orderBy(users, ['age'], ['desc'])).toEqual(
				_orderBy(users, ['age'], ['desc'])
			);
		});

		it("orderBy(users, 'age')", () => {
			expect(orderBy(users, 'age')).toEqual(_orderBy(users, 'age'));
		});

		it("orderBy(users, 'age', 'desc')", () => {
			expect(orderBy(users, 'age', 'desc')).toEqual(
				_orderBy(users, 'age', 'desc')
			);
		});
	});
});
