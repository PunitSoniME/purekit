import _tail from 'lodash/tail';
import { tail } from '../../src/array';
import { numberMockData } from '../mockData';

describe('Array', () => {
	describe('tail', () => {
		it('[Array Of numbers] It should return all but the first element of array', () => {
			expect(tail(numberMockData)).toEqual(_tail(numberMockData));
		});
	});
});
