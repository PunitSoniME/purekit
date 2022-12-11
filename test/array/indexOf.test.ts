import { indexOf as _indexOf } from 'lodash';
import { indexOf } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('indexOf', () => {
		it('[Array Of Number] It should return indexOf element 2', () => {
			expect(indexOf(numberMockData, 2)).toEqual(_indexOf(numberMockData, 2));
		});

		it('[Array Of Number] It should return indexOf element 100', () => {
			expect(indexOf(numberMockData, 100)).toEqual(
				_indexOf(numberMockData, 100)
			);
		});

		it('[Array Of Number] It should return indexOf element 2 fromIndex 2', () => {
			expect(indexOf(numberMockData, 2, 2)).toEqual(
				_indexOf(numberMockData, 2, 2)
			);
		});
	});
});
