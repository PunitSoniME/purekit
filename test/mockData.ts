import IObjectMock from './model/IObjectMock';

let numberMockData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let objectMockData: IObjectMock[] = numberMockData.map(m => {
  return { id: m, name: `Punit ${m}` };
});

export { numberMockData, objectMockData };
