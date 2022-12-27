import _nth from 'lodash/nth';
import { nth } from '../../src/array';
import { stringMockData } from '../mockData';

describe('Array', () => {
	describe('nth', () => {
		it('[Array Of string] It should return the nth element from an array of given positive index', () => {
			expect(nth(stringMockData, 1)).toEqual(_nth(stringMockData, 1));
		});

		it('[Array Of string] It should return the nth element from an array of given negative index', () => {
			expect(nth(stringMockData, -2)).toEqual(_nth(stringMockData, -2));
		});
	});
});
