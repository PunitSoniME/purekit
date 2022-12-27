import _some from 'lodash/some';
import { some } from '../../src/collection';

const users = [
	{ user: 'barney', active: true },
	{ user: 'fred', active: false },
];

describe('Collection', () => {
	describe('some', () => {
		it("some([null, 0, 'yes', false], Boolean)", () => {
			const data = [null, 0, 'yes', false];
			expect(some(data, Boolean)).toEqual(_some(data, Boolean));
		});

		it("some(users, { 'user': 'barney', 'active': false })", () => {
			const predicate = { user: 'barney', active: false };
			expect(some(users, predicate)).toEqual(_some(users, predicate));
		});

		it("some(users, ['active', false])", () => {
			const predicate = ['active', false];
			expect(some(users, predicate)).toEqual(_some(users, predicate));
		});

		it("some(users, 'active')", () => {
			const predicate = 'active';
			expect(some(users, predicate)).toEqual(_some(users, predicate));
		});
	});
});
