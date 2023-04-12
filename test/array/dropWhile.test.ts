import _dropWhile from 'lodash/dropWhile';
import { dropWhile } from '../../src/array';

const users = [
	{ user: 'barney', active: false },
	{ user: 'fred', active: false },
	{ user: 'pebbles', active: true },
];

describe('Array', () => {
	describe('dropWhile', () => {
		it('dropWhile([])', () => {
			expect(dropWhile([])).toEqual(_dropWhile([]));
		});

		it('dropWhile(users, (o: any) => !o.active)', () => {
			const predicate = (o: any) => !o.active;
			expect(dropWhile(users, predicate)).toEqual(_dropWhile(users, predicate));
		});

		it("dropWhile(users, { 'user': 'barney', 'active': false }", () => {
			const predicate = { user: 'barney', active: false };
			expect(dropWhile(users, predicate)).toEqual(_dropWhile(users, predicate));
		});

		it("dropWhile(users, ['active', false]", () => {
			expect(dropWhile(users, ['active', false])).toEqual(
				_dropWhile(users, ['active', false])
			);
		});

		it("dropWhile(users, 'active'", () => {
			expect(dropWhile(users, 'active')).toEqual(_dropWhile(users, 'active'));
		});
	});
});
