import _head from 'lodash/head';
import { head } from '../../src/array';
import { numberMockData, objectMockData } from '../mockData';

describe('Array', () => {
	describe('head', () => {
		it('[Array Of Number] It should return head element', () => {
			expect(head(numberMockData)).toEqual(_head(numberMockData));
		});

		it('[Array Of Object] It should return head element', () => {
			expect(head(objectMockData)).toEqual(_head(objectMockData));
		});
	});
});
