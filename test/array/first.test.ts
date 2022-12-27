import _first from 'lodash/first';
import { first } from '../../src/array';
import { numberMockData, objectMockData } from '../mockData';

describe('Array', () => {
	describe('first', () => {
		it('[Array Of Number] It should return first element', () => {
			expect(first(numberMockData)).toEqual(_first(numberMockData));
		});

		it('[Array Of Object] It should return first element', () => {
			expect(first(objectMockData)).toEqual(_first(objectMockData));
		});
	});
});
