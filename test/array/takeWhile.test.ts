import _takeWhile from 'lodash/takeWhile';
import { takeWhile } from '../../src/array';
import { usersMockData } from '../mockData';

describe('Array', () => {
	describe('takeWhile', () => {
		it('[Empty Array] It should return the empty an array', () => {
			const predicate = (o: any) => {
				return !o.active;
			};
			expect(takeWhile([], predicate)).toEqual(_takeWhile([], predicate));
		});

		it('[Empty Array if no records found] It should return the empty an array if no record found', () => {
			const predicate = (o: any) => {
				return o.user === 'xyz';
			};
			expect(takeWhile(usersMockData, predicate)).toEqual(
				_takeWhile(usersMockData, predicate)
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the begining - callback predicate', () => {
			const predicate = (o: any) => {
				return !o.active;
			};
			expect(takeWhile(usersMockData, predicate)).toEqual(
				_takeWhile(usersMockData, predicate)
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the begining - object predicate', () => {
			const predicate = { user: 'pebbles', active: false };
			expect(takeWhile(usersMockData, predicate)).toEqual(
				_takeWhile(usersMockData, predicate)
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the begining - array predicate', () => {
			expect(takeWhile(usersMockData, ['active', false])).toEqual(
				_takeWhile(usersMockData, ['active', false])
			);
		});

		it('[Array Of Objects] It should creates a slice of array with elements taken from the begining - property predicate', () => {
			const predicate = 'active';
			expect(takeWhile(usersMockData, predicate)).toEqual(
				_takeWhile(usersMockData, predicate)
			);
		});
	});
});
