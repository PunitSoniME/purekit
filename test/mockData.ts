import IObjectMock from './model/IObjectMock';

let numberMockData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stringMockData: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let objectMockData: IObjectMock[] = numberMockData.map(m => {
	return { id: m, name: `Punit ${m}` };
});
let usersMockData = [
	{ user: 'barney', active: false },
	{ user: 'fred', active: false },
	{ user: 'pebbles', active: true },
];

export { numberMockData, stringMockData, objectMockData, usersMockData };
