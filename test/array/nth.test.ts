import _nth from 'lodash/nth';
import { nth } from '../../src/array';
import { stringMockData } from '../mockData';

describe('Array', () => {
	describe('nth', () => {
		it('nth([])', () => {
			expect(nth([])).toEqual(_nth([]));
		});

		it('nth(stringMockData, 1)', () => {
			expect(nth(stringMockData, 1)).toEqual(_nth(stringMockData, 1));
		});

		it('nth(stringMockData, -2)', () => {
			expect(nth(stringMockData, -2)).toEqual(_nth(stringMockData, -2));
		});
	});
});
