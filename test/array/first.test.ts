import { first } from '../../src/array';

interface ObjectMockClass {
  id: number;
  name: string;
}

let numberMockData: number[] = [];
let objectMockData: ObjectMockClass[] = [];

describe('Array', () => {
  beforeAll(() => {
    numberMockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    objectMockData = numberMockData.map((m) => {
      return { id: m, name: `Punit ${m}` };
    });
  });

  describe('first', () => {
    it('[Array Of Number] It should return first element', () => {
      expect(first(numberMockData)).toEqual(1);
    });

    it('[Array Of Object] It should return first element', () => {
      expect(first(objectMockData)).toEqual(objectMockData[0]);
    });
  });
});
