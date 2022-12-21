import { reject as _reject } from 'lodash';
import { reject } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: false },
	{ user: 'fred', age: 40, active: true },
];

describe('Collection', () => {
	describe('reject', () => {
		it('reject(users, (o: any) => { return !o.active; })', () => {
			const predicate = (o: any) => {
				return !o.active;
			};
			expect(reject(users, predicate)).toEqual(_reject(users, predicate));
		});

		it("reject(users, { 'age': 40, 'active': true })", () => {
			const predicate = { age: 40, active: true };
			expect(reject(users, predicate)).toEqual(_reject(users, predicate));
		});

		it("reject(users, ['active', false])", () => {
			const predicate = ['active', false];
			expect(reject(users, predicate)).toEqual(_reject(users, predicate));
		});

		it("reject(users, 'active')", () => {
			expect(reject(users, 'active')).toEqual(_reject(users, 'active'));
		});
	});
});
