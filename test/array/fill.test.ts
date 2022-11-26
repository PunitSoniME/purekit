import { fill as _fill } from 'lodash';
import { fill } from '../../src/array';

describe('Array', () => {
  describe('fill', () => {
    it('[Array Of Number] It should replace the data with passed value ("a")', () => {
      let array = [1, 2, 3];
      expect(_fill(array, 'a')).toEqual(fill(array, 'a'));
    });

    it('[Array Of Number] It should replace the data with passed value (2)', () => {
      expect(_fill(Array(3), 2)).toEqual(fill(Array(3), 2));
    });

    it('[Array Of Number] It should replace the data from start index to end index', () => {
      let data = [4, 6, 8, 10];
      expect(_fill(data, '*', 1, 3)).toEqual(fill(data, '*', 1, 3));
    });
  });
});
