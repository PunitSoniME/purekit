import { take as _take } from 'lodash';
import { take } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('take', () => {
		it('[Array Of numbers] It should creates a slice of array with 1 element taken from the beginning ( default value )', () => {
			expect(take(numberMockData)).toEqual(_take(numberMockData));
		});

		it('[Array Of numbers] It should creates a slice of array with 2 elements taken from the beginning', () => {
			expect(take(numberMockData, 2)).toEqual(_take(numberMockData, 2));
		});

		it('[Array Of numbers] It should creates a slice of array with 15 elements taken from the beginning', () => {
			expect(take(numberMockData, 15)).toEqual(_take(numberMockData, 15));
		});

		it('[Array Of numbers] It should creates a slice of array with 0 elements taken from the beginning', () => {
			expect(take(numberMockData, 0)).toEqual(_take(numberMockData, 0));
		});
	});
});
