import _initial from 'lodash/initial';
import { initial } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('initial', () => {
		it('[Array Of Number] It should return same array except last element', () => {
			expect(initial(numberMockData)).toEqual(_initial(numberMockData));
		});
	});
});
