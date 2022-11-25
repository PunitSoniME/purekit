import { compact } from '../../src/array';

describe('Array', () => {
  describe('compact', () => {
    it('It should remove the falsy values', () => {
      const array = [1, '', false, null, 0, undefined, 'abc', 'XYZ'];
      expect(compact(array)).toEqual([1, 'abc', 'XYZ']);
    });
  });
});
