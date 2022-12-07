import { findLastIndex as _findLastIndex } from 'lodash';
import { findLastIndex } from '../../src/array';
import { numberMockData, stringMockData, usersMockData } from '../mockData';

describe('Array', () => {
	describe('findLastIndex', () => {
		it('[Array Of Object] It should return the last index based on passed predicate', () => {
			const predicate = function(o: any) {
				return o.user === 'pebbles';
			};

			expect(_findLastIndex(usersMockData, predicate)).toEqual(
				findLastIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the last index based on passed object', () => {
			const predicate = { user: 'barney', active: true };

			expect(_findLastIndex(usersMockData, predicate)).toEqual(
				findLastIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the last index based on passed array', () => {
			expect(_findLastIndex(usersMockData, ['active', false])).toEqual(
				findLastIndex(usersMockData, ['active', false])
			);
		});

		it('[Array Of Object] It should return the last index based on passed string key', () => {
			expect(_findLastIndex(usersMockData, 'active')).toEqual(
				findLastIndex(usersMockData, 'active')
			);
		});

		it('[Array Of Number] It should return the index based on passed array', () => {
			expect(_findLastIndex(numberMockData, 100)).toEqual(
				findLastIndex(numberMockData, 100)
			);
		});

		it('[Array Of String] It should return the index based on passed array', () => {
			expect(_findLastIndex(stringMockData, 'z')).toEqual(
				findLastIndex(stringMockData, 'z')
			);
		});
	});
});
