import { differenceBy } from '../../src/array';

describe('Array', () => {

  describe('differenceBy', () => {
    it('[Array Of Object] It should return the difference using property', () => {
      expect(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')).toEqual([
        { x: 2 },
      ]);
    });

    it('[Array Of Number] It should return the difference using method', () => {
      expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
    });
  });

});
