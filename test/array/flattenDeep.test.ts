import { flattenDeep as _flattenDeep } from 'lodash';
import { flattenDeep } from '../../src/array';

const data = [1, [2, [3, [4]], 5]];

describe('Array', () => {
  describe('flattenDeep', () => {
    it('[Array Of Number] It should return the flatten data', () => {
      expect(_flattenDeep(data)).toEqual(flattenDeep(data));
    });
  });
});
