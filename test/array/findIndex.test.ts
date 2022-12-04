import { findIndex as _findIndex } from 'lodash';
import { findIndex } from '../../src/array';

describe('Array', () => {
	let users = [
		{ user: 'barney', active: false },
		{ user: 'fred', active: false },
		{ user: 'pebbles', active: true },
	];

	describe('findIndex', () => {
		it('[Array Of Object] It should return the index based on passed predicate', () => {
			const predicate = function(o: any) {
				return o.user === 'barney';
			};

			expect(_findIndex(users, predicate)).toEqual(findIndex(users, predicate));
		});

		it('[Array Of Object] It should return the index based on passed object', () => {
			const predicate = { user: 'barney' };

			expect(_findIndex(users, predicate)).toEqual(findIndex(users, predicate));
		});

		it('[Array Of Object] It should return the index based on passed array', () => {
			expect(_findIndex(users, ['active', false])).toEqual(
				findIndex(users, ['active', false])
			);
		});
	});
});
