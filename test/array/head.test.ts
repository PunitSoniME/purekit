import { head as _head } from 'lodash';
import { head } from '../../src/array';
import { numberMockData, objectMockData } from '../mockData';

describe('Array', () => {
	describe('head', () => {
		it('[Array Of Number] It should return head element', () => {
			expect(_head(numberMockData)).toEqual(head(numberMockData));
		});

		it('[Array Of Object] It should return head element', () => {
			expect(_head(objectMockData)).toEqual(head(objectMockData));
		});
	});
});
