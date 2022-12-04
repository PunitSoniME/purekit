import { first as _first } from 'lodash';
import { first } from '../../src/array';
import { numberMockData, objectMockData } from '../mockData';

describe('Array', () => {
	describe('first', () => {
		it('[Array Of Number] It should return first element', () => {
			expect(_first(numberMockData)).toEqual(first(numberMockData));
		});

		it('[Array Of Object] It should return first element', () => {
			expect(_first(objectMockData)).toEqual(first(objectMockData));
		});
	});
});
