import { takeRight as _takeRight } from 'lodash';
import { takeRight } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('takeRight', () => {
		it('[Array Of numbers] It should creates a slice of array with 1 element taken from the end ( default value )', () => {
			expect(takeRight(numberMockData)).toEqual(_takeRight(numberMockData));
		});

		it('[Array Of numbers] It should creates a slice of array with 2 elements taken from the end', () => {
			expect(takeRight(numberMockData, 2)).toEqual(
				_takeRight(numberMockData, 2)
			);
		});

		it('[Array Of numbers] It should creates a slice of array with 15 elements taken from the end', () => {
			expect(takeRight(numberMockData, 15)).toEqual(
				_takeRight(numberMockData, 15)
			);
		});

		it('[Array Of numbers] It should creates a slice of array with 0 elements taken from the end', () => {
			expect(takeRight(numberMockData, 0)).toEqual(
				_takeRight(numberMockData, 0)
			);
		});
	});
});
