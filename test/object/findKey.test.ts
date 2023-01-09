import _findKey from 'lodash/findKey';
import { findKey } from '../../src/object';

const users = {
	barney: { age: 36, active: true },
	fred: { age: 40, active: false },
	pebbles: { age: 1, active: true },
};

describe('Object', () => {
	describe('findKey', () => {
		it('findKey(users, (o: any) => o.age < 40)', () => {
			expect(findKey(users, (o: any) => o.age < 40)).toEqual(
				_findKey(users, (o: any) => o.age < 40)
			);
		});

		it("findKey(users, { 'age': 1, 'active': true })", () => {
			expect(findKey(users, { age: 1, active: true })).toEqual(
				_findKey(users, { age: 1, active: true })
			);
		});

		it("findKey(users, ['active', false])", () => {
			expect(findKey(users, ['active', false])).toEqual(
				_findKey(users, ['active', false])
			);
		});

		it("findKey(users, 'active')", () => {
			expect(findKey(users, 'active')).toEqual(_findKey(users, 'active'));
		});
	});
});
