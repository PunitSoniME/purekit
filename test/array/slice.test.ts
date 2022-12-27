import _slice from 'lodash/slice';
import { slice } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('slice', () => {
		it('[Array Of numbers] It should return sliced data with default paramters', () => {
			expect(slice(numberMockData)).toEqual(_slice(numberMockData));
		});

		it('[Array Of numbers] It should return sliced data from index 2', () => {
			expect(slice(numberMockData, 2)).toEqual(_slice(numberMockData, 2));
		});

		it('[Array Of numbers] It should return sliced data from index 2 till index 5', () => {
			expect(slice(numberMockData, 2, 5)).toEqual(_slice(numberMockData, 2, 5));
		});
	});
});
