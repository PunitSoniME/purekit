import _dropRightWhile from 'lodash/dropRightWhile';
import { dropRightWhile } from '../../src/array';

const users = [
	{ user: 'barney', active: true },
	{ user: 'fred', active: false },
	{ user: 'pebbles', active: false },
];

describe('Array', () => {
	describe('dropRightWhile', () => {
		it('dropRightWhile(users, (o: any) => !o.active)', () => {
			const predicate = (o: any) => !o.active;
			expect(dropRightWhile(users, predicate)).toEqual(
				_dropRightWhile(users, predicate)
			);
		});

		it("dropRightWhile(users, { 'user': 'pebbles', 'active': false }", () => {
			const predicate = { user: 'pebbles', active: false };
			expect(dropRightWhile(users, predicate)).toEqual(
				_dropRightWhile(users, predicate)
			);
		});

		it("dropRightWhile(users, ['active', false]", () => {
			expect(dropRightWhile(users, ['active', false])).toEqual(
				_dropRightWhile(users, ['active', false])
			);
		});

		it("dropRightWhile(users, 'active'", () => {
			expect(dropRightWhile(users, 'active')).toEqual(
				_dropRightWhile(users, 'active')
			);
		});
	});
});
