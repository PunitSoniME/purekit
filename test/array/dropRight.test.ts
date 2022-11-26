import { dropRight as _dropRight } from 'lodash';
import { dropRight } from '../../src/array';

describe('Array', () => {
  describe('dropRight', () => {
    const data = [1, 2, 3];

    it('[Array Of Number] It should remove the first element from right and return rest of the array', () => {
      expect(_dropRight(data)).toEqual(dropRight(data));
    });

    it('[Array Of Number] It should remove the two elements from right and return rest of the array', () => {
      expect(_dropRight(data, 2)).toEqual(dropRight(data, 2));
    });

    it('[Array Of Number] It should remove the five elements from right and return rest of the array', () => {
      expect(_dropRight(data, 5)).toEqual(dropRight(data, 5));
    });

    it('[Array Of Number] It should remove the zero elements from right and return rest of the array', () => {
      expect(_dropRight(data, 0)).toEqual(dropRight(data, 0));
    });
  });
});
