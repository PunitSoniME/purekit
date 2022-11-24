import { add } from '../src/maths';

let numberMockData: number[] = [];

describe('Maths', () => {
  beforeAll(() => {
    numberMockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });

  describe('add', () => {
    it('[Array Of Number] It should sum of data', () => {
      expect(add(numberMockData)).toEqual(55);
    });
  });
});
