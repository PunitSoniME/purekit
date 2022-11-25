import { dropRight } from '../../src/array';

describe('Array', () => {

  describe('dropRight', () => {

    const data = [1, 2, 3];

    it('[Array Of Number] It should remove the first element from right and return rest of the array', () => {
      expect(dropRight(data)).toEqual([1, 2]);
    });

    it('[Array Of Number] It should remove the two elements from right and return rest of the array', () => {
      expect(dropRight(data, 2)).toEqual([1]);
    });

    it('[Array Of Number] It should remove the five elementss from right and return rest of the array', () => {
      expect(dropRight(data, 5)).toEqual([]);
    });

    it('[Array Of Number] It should remove the zero elementss from right and return rest of the array', () => {
      expect(dropRight(data, 0)).toEqual([1, 2, 3]);
    });
  });

});
