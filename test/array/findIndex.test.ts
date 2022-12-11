import { findIndex as _findIndex } from 'lodash';
import { findIndex } from '../../src/array';
import { numberMockData, usersMockData, stringMockData } from '../mockData';

describe('Array', () => {
	describe('findIndex', () => {
		it('[Array Of Object] It should return the index based on passed predicate', () => {
			const predicate = function(o: any) {
				return o.user === 'barney';
			};

			expect(findIndex(usersMockData, predicate)).toEqual(
				_findIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the index based on passed object', () => {
			const predicate = { user: 'barney' };

			expect(findIndex(usersMockData, predicate)).toEqual(
				_findIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the index based on passed array', () => {
			expect(findIndex(usersMockData, ['active', false])).toEqual(
				_findIndex(usersMockData, ['active', false])
			);
		});

		it('[Array Of Number] It should return the index based on passed array', () => {
			expect(findIndex(numberMockData, 100)).toEqual(
				_findIndex(numberMockData, 100)
			);
		});

		it('[Array Of String] It should return the index based on passed array', () => {
			expect(findIndex(stringMockData, 'z')).toEqual(
				_findIndex(stringMockData, 'z')
			);
		});
	});
});
