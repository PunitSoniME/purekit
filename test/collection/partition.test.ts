import { partition as _partition } from 'lodash';
import { partition } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: false },
	{ user: 'fred', age: 40, active: true },
	{ user: 'pebbles', age: 1, active: false },
];

describe('Collection', () => {
	describe('partition', () => {
		it('partition(users, (o: any) => { return o.active; })', () => {
			expect(
				partition(users, (o: any) => {
					return o.active;
				})
			).toEqual(
				_partition(users, (o: any) => {
					return o.active;
				})
			);
		});

		it("partition(users, { 'age': 1, 'active': false })", () => {
			expect(partition(users, { age: 1, active: false })).toEqual(
				_partition(users, { age: 1, active: false })
			);
		});

		it("partition(users, ['active', false])", () => {
			expect(partition(users, ['active', false])).toEqual(
				_partition(users, ['active', false])
			);
		});

		it("partition(users, 'active')", () => {
			expect(partition(users, 'active')).toEqual(_partition(users, 'active'));
		});
	});
});
