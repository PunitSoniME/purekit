import _dropRightWhile from 'lodash/dropRightWhile';
import { dropRightWhile } from '../../src/array';

const users = [
	{ user: 'barney', active: true },
	{ user: 'fred', active: false },
	{ user: 'pebbles', active: false },
];

describe('Array', () => {
	describe('dropRightWhile', () => {
		it('dropRightWhile([])', () => {
			expect(dropRightWhile([])).toEqual(_dropRightWhile([]));
		});

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

		// describe('dropRightWhile', () => {
		// 	it('should return an empty array for an empty input array', () => {
		// 		expect(dropRightWhile([])).toEqual([]);
		// 	});

		// 	it('should drop elements from the right until the predicate returns false and return the remaining elements', () => {
		// 		const array = [1, 2, 3, 4, 5];
		// 		const predicate = (n: number) => n > 3;
		// 		const expected = [1, 2, 3];
		// 		expect(dropRightWhile(array, predicate)).toEqual(expected);
		// 	});

		// 	it('should return the entire array if the predicate returns true for all elements', () => {
		// 		const array = [1, 2, 3];
		// 		const predicate = (n: number) => n < 4;
		// 		expect(dropRightWhile(array, predicate)).toEqual(array);
		// 	});

		// 	it('should handle complex predicates correctly', () => {
		// 		const array = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Jake', age: 20 }];
		// 		const predicate = (obj: { name: string, age: number }) => obj.age > 20 && obj.name.startsWith('J');
		// 		const expected = [{ name: 'Jane', age: 30 }];
		// 		expect(dropRightWhile(array, predicate)).toEqual(expected);
		// 	});
		// });
	});
});
