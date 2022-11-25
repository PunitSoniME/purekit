import { filter } from '../../src/array';

interface ObjectMockClass {
  id: number;
  name: string;
}

let numberMockData: number[] = [];
let objectMockData: ObjectMockClass[] = [];

describe('Array', () => {
  beforeAll(() => {
    numberMockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    objectMockData = numberMockData.map(m => {
      return { id: m, name: `Punit ${m}` };
    });
  });

  describe('filter', () => {
    it('[Array Of Number] It should filter records based on condition', () => {
      const filteredData = filter(numberMockData, (d: number) => {
        return d % 2 === 0;
      });

      expect(filteredData).toEqual([2, 4, 6, 8, 10]);
    });

    it('[Array Of Object] It should filter records based on condition', () => {
      const id = 1;

      const filteredData = filter(objectMockData, (d: ObjectMockClass) => {
        return d.id === id;
      });

      expect(filteredData).toEqual([{ id: id, name: `Punit ${id}` }]);
    });
  });
});
