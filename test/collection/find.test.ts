import { find as _find } from 'lodash';
import { find } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred 1', age: 40, active: false },
	{ user: 'fred 2', age: 40, active: false },
	{ user: 'pebbles', age: 1, active: true },
];

describe('Array', () => {
	describe('find', () => {
		it('find(users, (o: any) => { return o.age < 40; });', () => {
			const predicate = (o: any) => {
				return o.age < 40;
			};
			expect(find(users, predicate)).toEqual(_find(users, predicate));
		});

		it('find(users, (o: any) => { return o.age < 40; }, 2);', () => {
			const predicate = (o: any) => {
				return o.age < 40;
			};
			expect(find(users, predicate, 2)).toEqual(_find(users, predicate, 2));
		});

		it('find(users, { age: 36, active: true })', () => {
			expect(find(users, { age: 36, active: true })).toEqual(
				_find(users, { age: 36, active: true })
			);
		});

		it("find(users, ['active', false])", () => {
			expect(find(users, ['active', false])).toEqual(
				_find(users, ['active', false])
			);
		});

		it("find(users, 'active')", () => {
			expect(find(users, 'active')).toEqual(_find(users, 'active'));
		});
	});
});
