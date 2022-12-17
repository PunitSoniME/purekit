import { every as _every } from 'lodash';
import { every } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: false },
	{ user: 'fred', age: 40, active: false },
];

describe('Collection', () => {
	describe('every', () => {
		it("every([true, 1, null, 'yes'], Boolean)", () => {
			expect(every([true, 1, null, 'yes'], Boolean)).toEqual(
				_every([true, 1, null, 'yes'], Boolean)
			);
		});

		it("every(users, { 'user': 'barney', 'active': false })", () => {
			expect(every(users, { user: 'barney', active: false })).toEqual(
				_every(users, { user: 'barney', active: false })
			);
		});

		it("every(users, ['active', false]", () => {
			expect(every(users, ['active', false])).toEqual(
				_every(users, ['active', false])
			);
		});

		it("every(users, 'active'", () => {
			expect(every(users, 'active')).toEqual(_every(users, 'active'));
		});
	});
});
