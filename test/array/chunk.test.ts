import _chunk from 'lodash/chunk';
import { chunk } from '../../src/array';

let numberMockData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Array', () => {
	describe('chunk', () => {
		it('chunk(numberMockData)', () => {
			expect(chunk(numberMockData)).toEqual(_chunk(numberMockData));
		});

		it('chunk(numberMockData, 3)', () => {
			expect(chunk(numberMockData, 3)).toEqual(_chunk(numberMockData, 3));
		});
	});
});
