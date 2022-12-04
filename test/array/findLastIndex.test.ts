import { findLastIndex as _findLastIndex } from 'lodash';
import { findLastIndex } from '../../src/array';

describe('Array', () => {
	let users = [
		{ user: 'barney', active: false },
		{ user: 'fred', active: false },
		{ user: 'pebbles', active: true },
	];

	describe('findLastIndex', () => {
		it('[Array Of Object] It should return the last index based on passed predicate', () => {
			const predicate = function(o: any) {
				return o.user === 'pebbles';
			};

			expect(_findLastIndex(users, predicate)).toEqual(
				findLastIndex(users, predicate)
			);
		});

		it('[Array Of Object] It should return the last index based on passed object', () => {
			const predicate = { user: 'barney', active: true };

			expect(_findLastIndex(users, predicate)).toEqual(
				findLastIndex(users, predicate)
			);
		});

		it('[Array Of Object] It should return the last index based on passed array', () => {
			expect(_findLastIndex(users, ['active', false])).toEqual(
				findLastIndex(users, ['active', false])
			);
		});

		it('[Array Of Object] It should return the last index based on passed string key', () => {
			expect(_findLastIndex(users, 'active')).toEqual(
				findLastIndex(users, 'active')
			);
		});
	});
});
