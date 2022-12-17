import { chunk as _chunk } from 'lodash';
import { chunk } from '../../src/array';

let numberMockData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Array', () => {
	describe('chunk', () => {
		it('[Array Of Number] It should chunk data into default 1 chunk size', () => {
			expect(chunk(numberMockData)).toEqual(_chunk(numberMockData));
		});

		it('[Array Of Number] It should chunk data into given chunk size', () => {
			expect(chunk(numberMockData, 3)).toEqual(_chunk(numberMockData, 3));
		});
	});
});
