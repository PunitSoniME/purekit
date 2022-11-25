import { fill } from '../../src/array';

describe('Array', () => {

  describe('fill', () => {

    it('[Array Of Number] It should replace the data with passed value ("a")', () => {
      let array = [1, 2, 3];
      expect(fill(array, 'a')).toEqual(['a', 'a', 'a']);
    });

    it('[Array Of Number] It should replace the data with passed value (2)', () => {
      expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
    });

    it('[Array Of Number] It should replace the data from start index to end index', () => {
      let data = [4, 6, 8, 10];
      expect(fill(data, '*', 1, 3)).toEqual([4, '*', '*', 10]);
    });

  });
});
