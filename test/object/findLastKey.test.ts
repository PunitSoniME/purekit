import _findLastKey from 'lodash/findLastKey';
import { findLastKey } from '../../src/object';

const users = {
	barney: { age: 36, active: true },
	fred: { age: 40, active: false },
	pebbles: { age: 1, active: true },
};

describe('Object', () => {
	describe('findLastKey', () => {
		it('findLastKey(users, (o: any) => o.age < 40)', () => {
			expect(findLastKey(users, (o: any) => o.age < 40)).toEqual(
				_findLastKey(users, (o: any) => o.age < 40)
			);
		});

		it("findLastKey(users, { 'age': 36, 'active': true })", () => {
			expect(findLastKey(users, { age: 36, active: true })).toEqual(
				_findLastKey(users, { age: 36, active: true })
			);
		});

		it("findLastKey(users, ['active', false])", () => {
			expect(findLastKey(users, ['active', false])).toEqual(
				_findLastKey(users, ['active', false])
			);
		});

		it("findLastKey(users, 'active')", () => {
			expect(findLastKey(users, 'active')).toEqual(
				_findLastKey(users, 'active')
			);
		});
	});
});
