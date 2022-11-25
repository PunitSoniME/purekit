import { findOne } from '../../src/array';

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

  describe('findOne', () => {
    it('[Array Of Number] It should return single record', () => {
      const record = findOne(numberMockData, (d: number) => {
        return d === 3;
      });

      expect(record).toEqual(3);
    });

    it('[Array Of Object] It should return single record', () => {
      const id = 3;

      const record = findOne(objectMockData, (d: ObjectMockClass) => {
        return d.id === id;
      });

      expect(record).toEqual({ id: id, name: `Punit ${id}` });
    });
  });

});
