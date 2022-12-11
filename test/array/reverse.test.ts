import { reverse as _reverse } from 'lodash';
import { reverse } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('reverse', () => {
		it('[Array Of numbers] It should return passed array in reversed format', () => {
			expect(reverse(numberMockData)).toEqual(_reverse(numberMockData));
		});
	});
});
