import {
  difference,
  differenceBy,
  filter,
  findOne,
  first,
  chunk,
  compact,
  concat,
} from '../src/array';

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

  describe('difference', () => {
    it('[Array Of Number] It should return the difference', () => {
      expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
  });

  describe('differenceBy', () => {
    it('[Array Of Object] It should return the difference using property', () => {
      expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toEqual([
        { x: 2 },
      ]);
    });

    it('[Array Of Object] It should return the difference using method', () => {
      expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
    });
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

  describe('compact', () => {
    it('It should remove the falsy values', () => {
      const array = [1, '', false, null, 0, undefined, 'abc', 'XYZ'];
      expect(compact(array)).toEqual([1, 'abc', 'XYZ']);
    });
  });

  describe('concat', () => {
    const array = [[1], 2, [3], [[4]], 5];
    it('It should concat the data and return an array', () => {
      expect(concat(array)).toEqual([1, 2, 3, [4], 5]);
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

  describe('first', () => {
    it('[Array Of Number] It should return first element', () => {
      expect(first(numberMockData)).toEqual(1);
    });

    it('[Array Of Object] It should return first element', () => {
      expect(first(objectMockData)).toEqual(objectMockData[0]);
    });
  });
});
