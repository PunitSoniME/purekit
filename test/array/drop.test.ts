import { drop } from '../../src/array';

describe('Array', () => {

  describe('drop', () => {

    const data = [1, 2, 3];

    it('[Array Of Number] It should remove the first element from left and return rest of the array', () => {
      expect(drop(data)).toEqual([2, 3]);
    });

    it('[Array Of Number] It should remove the two elements from left and return rest of the array', () => {
      expect(drop(data, 2)).toEqual([3]);
    });

    it('[Array Of Number] It should remove the five elements from left and return rest of the array', () => {
      expect(drop(data, 5)).toEqual([]);
    });

    it('[Array Of Number] It should remove the zero elements from left and return rest of the array', () => {
      expect(drop(data, 0)).toEqual([1, 2, 3]);
    });
  });

});
