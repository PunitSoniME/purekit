import { findLastIndex as _findLastIndex } from 'lodash';
import { findLastIndex } from '../../src/array';
import { numberMockData, stringMockData, usersMockData } from '../mockData';

describe('Array', () => {
	describe('findLastIndex', () => {
		it('[Array Of Object] It should return the last index based on passed predicate', () => {
			const predicate = function (o: any) {
				return o.user === 'pebbles';
			};

			expect(findLastIndex(usersMockData, predicate)).toEqual(
				_findLastIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the last index based on passed object', () => {
			const predicate = { user: 'barney', active: true };

			expect(findLastIndex(usersMockData, predicate)).toEqual(
				_findLastIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the last index based on passed array', () => {
			expect(findLastIndex(usersMockData, ['active', false])).toEqual(
				_findLastIndex(usersMockData, ['active', false])
			);
		});

		it('[Array Of Object] It should return the last index based on passed string key', () => {
			expect(findLastIndex(usersMockData, 'active')).toEqual(
				_findLastIndex(usersMockData, 'active')
			);
		});

		it('[Array Of Number] It should return the index based on passed array', () => {
			expect(findLastIndex(numberMockData, 100)).toEqual(
				_findLastIndex(numberMockData, 100)
			);
		});

		it('[Array Of String] It should return the index based on passed array', () => {
			expect(findLastIndex(stringMockData, 'z')).toEqual(
				_findLastIndex(stringMockData, 'z')
			);
		});
	});
});
