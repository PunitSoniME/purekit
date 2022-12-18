import IObjectMock from './model/IObjectMock';

const numberMockData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringMockData: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const usersMockData = [
	{ user: 'barney', active: false },
	{ user: 'fred', active: false },
	{ user: 'pebbles', active: true },
];

const objectMockData: IObjectMock[] = numberMockData.map((m) => {
	return { id: m, name: `Punit ${m}` };
});

export { numberMockData, stringMockData, usersMockData, objectMockData };
