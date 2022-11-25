import { chunk } from '../../src/array';

let numberMockData: number[] = [];

describe('Array', () => {
  beforeAll(() => {
    numberMockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });

  describe('chunk', () => {
    it('[Array Of Number] It should chunk data into given chunk size', () => {
      expect(chunk(numberMockData, 3)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10],
      ]);
    });
  });
});
