import { filter as _filter } from 'lodash';
import { filter } from '../../src/array';
import { numberMockData, objectMockData } from '../mockData';
import IObjectMock from '../model/IObjectMock';

describe('Array', () => {
  describe('filter', () => {
    it('[Array Of Number] It should filter records based on condition', () => {
      const _filteredData = _filter(numberMockData, (d: number) => {
        return d % 2 === 0;
      });

      const filteredData = filter(numberMockData, (d: number) => {
        return d % 2 === 0;
      });

      expect(_filteredData).toEqual(filteredData);
    });

    it('[Array Of Object] It should filter records based on condition', () => {
      const id = 1;

      const _filteredData = _filter(objectMockData, (d: IObjectMock) => {
        return d.id === id;
      });

      const filteredData = filter(objectMockData, (d: IObjectMock) => {
        return d.id === id;
      });

      expect(_filteredData).toEqual(filteredData);
    });
  });
});
