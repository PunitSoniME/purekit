import { findLast as _findLast } from 'lodash/';
import { findLast } from '../../src/collection';

var users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred 1', age: 40, active: false },
	{ user: 'fred 2', age: 40, active: false },
	{ user: 'pebbles', age: 1, active: true },
];

describe('Array', () => {
	describe('findLast', () => {
		it('findLast(users, (o: any) => o.age < 40)', () => {
			const predicate = (o: any) => o.age < 40;
			expect(findLast(users, predicate)).toEqual(_findLast(users, predicate));
		});

		it('findLast(users, (o: any) => o.age === 40, 2)', () => {
			const predicate = (o: any) => o.age === 40;
			expect(findLast(users, predicate, 2)).toEqual(
				_findLast(users, predicate, 2)
			);
		});

		it('findLast(users, (o: any) => o.age === 40, 1)', () => {
			const predicate = (o: any) => o.age === 40;
			expect(findLast(users, predicate, 1)).toEqual(
				_findLast(users, predicate, 1)
			);
		});

		it('findLast(users, { age: 36, active: true })', () => {
			expect(findLast(users, { age: 36, active: true })).toEqual(
				_findLast(users, { age: 36, active: true })
			);
		});

		it("findLast(users, ['active', false])", () => {
			expect(findLast(users, ['active', false])).toEqual(
				_findLast(users, ['active', false])
			);
		});

		it("findLast(users, 'active')", () => {
			expect(findLast(users, 'active')).toEqual(_findLast(users, 'active'));
		});
	});
});
