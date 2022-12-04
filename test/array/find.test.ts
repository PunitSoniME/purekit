import { find as _find } from 'lodash';
import { find } from '../../src/array';
import { numberMockData, objectMockData } from '../mockData';
import IObjectMock from '../model/IObjectMock';

describe('Array', () => {
  describe('find', () => {
    it('[Array Of Number] It should return single record', () => {
      const _record = _find(numberMockData, (d: number) => {
        return d === 3;
      });

      const record = find(numberMockData, (d: number) => {
        return d === 3;
      });

      expect(_record).toEqual(record);
    });

    it('[Array Of Object] It should return single record', () => {
      const id = 3;

      const _record = _find(objectMockData, (d: IObjectMock) => {
        return d.id === id;
      });

      const record = find(objectMockData, (d: IObjectMock) => {
        return d.id === id;
      });

      expect(_record).toEqual(record);
    });
  });
});
