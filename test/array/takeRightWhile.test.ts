import { takeRightWhile as _takeRightWhile } from 'lodash';
import { takeRightWhile } from '../../src/array';
import { usersMockData } from '../mockData';

describe('Array', () => {
	describe('takeRightWhile', () => {
		it('[Empty Array] It should return the empty an array', () => {
			const predicate = (o: any) => {
				return !o.active;
			};
			expect(takeRightWhile([], predicate)).toEqual(
				_takeRightWhile([], predicate)
			);
		});

		it('[Empty Array if no records found] It should return the empty an array if no record found', () => {
			const predicate = (o: any) => {
				return o.user === 'xyz';
			};
			expect(takeRightWhile(usersMockData, predicate)).toEqual(
				_takeRightWhile(usersMockData, predicate)
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the end - callback predicate', () => {
			const predicate = (o: any) => {
				return !o.active;
			};
			expect(takeRightWhile(usersMockData, predicate)).toEqual(
				_takeRightWhile(usersMockData, predicate)
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the end - object predicate', () => {
			const predicate = { user: 'pebbles', active: false };
			expect(takeRightWhile(usersMockData, predicate)).toEqual(
				_takeRightWhile(usersMockData, predicate)
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the end - array predicate', () => {
			expect(takeRightWhile(usersMockData, ['active', false])).toEqual(
				_takeRightWhile(usersMockData, ['active', false])
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the end - property predicate', () => {
			const predicate = 'active';
			expect(takeRightWhile(usersMockData, predicate)).toEqual(
				_takeRightWhile(usersMockData, predicate)
			);
		});
	});
});
