import _iteratee from 'lodash/iteratee';
import _filter from 'lodash/filter';
import { iteratee } from '../../src/util';
import { filter } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred', age: 40, active: false },
];

describe('Util', () => {
	describe('iteratee', () => {
		it("filter(users, iteratee({ 'user': 'barney', 'active': true }))", () => {
			const iterateeResult = filter(
				users,
				iteratee({ user: 'barney', active: true })
			);
			const _iterateeResult = _filter(
				users,
				_iteratee({ user: 'barney', active: true })
			);

			expect(iterateeResult).toEqual(_iterateeResult);
		});

		it("filter(users, iteratee(['user', 'fred']))", () => {
			const iterateeResult = filter(users, iteratee(['user', 'fred']));
			const _iterateeResult = _filter(users, _iteratee(['user', 'fred']));

			expect(iterateeResult).toEqual(_iterateeResult);
		});

		it("filter(users, iteratee('user'))", () => {
			const iterateeResult = filter(users, iteratee('user'));
			const _iterateeResult = _filter(users, _iteratee('user'));

			expect(iterateeResult).toEqual(_iterateeResult);
		});
	});
});
