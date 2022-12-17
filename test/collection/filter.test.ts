import { filter as _filter } from 'lodash';
import { filter } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred', age: 40, active: false },
];

describe('Array', () => {
	describe('filter', () => {
		it('filter(users, (o: any) => { return !o.active; })', () => {
			const predicate = (o: any) => {
				return !o.active;
			};
			expect(filter(users, predicate)).toEqual(_filter(users, predicate));
		});

		it("filter(users, { 'age': 36, 'active': true })", () => {
			expect(filter(users, { age: 36, active: true })).toEqual(
				_filter(users, { age: 36, active: true })
			);
		});

		it("filter(users, ['active', false])", () => {
			expect(filter(users, ['active', false])).toEqual(
				_filter(users, ['active', false])
			);
		});

		it("filter(users, 'active')", () => {
			expect(filter(users, 'active')).toEqual(_filter(users, 'active'));
		});
	});
});
