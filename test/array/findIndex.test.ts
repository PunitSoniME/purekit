import { findIndex as _findIndex } from 'lodash';
import { findIndex } from '../../src/array';
import { numberMockData, usersMockData, stringMockData } from '../mockData';

describe('Array', () => {
	describe('findIndex', () => {
		it('[Array Of Object] It should return the index based on passed predicate', () => {
			const predicate = function(o: any) {
				return o.user === 'barney';
			};

			expect(_findIndex(usersMockData, predicate)).toEqual(
				findIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the index based on passed object', () => {
			const predicate = { user: 'barney' };

			expect(_findIndex(usersMockData, predicate)).toEqual(
				findIndex(usersMockData, predicate)
			);
		});

		it('[Array Of Object] It should return the index based on passed array', () => {
			expect(_findIndex(usersMockData, ['active', false])).toEqual(
				findIndex(usersMockData, ['active', false])
			);
		});

		it('[Array Of Number] It should return the index based on passed array', () => {
			expect(_findIndex(numberMockData, 100)).toEqual(
				findIndex(numberMockData, 100)
			);
		});

		it('[Array Of String] It should return the index based on passed array', () => {
			expect(_findIndex(stringMockData, 'z')).toEqual(
				findIndex(stringMockData, 'z')
			);
		});
	});
});
