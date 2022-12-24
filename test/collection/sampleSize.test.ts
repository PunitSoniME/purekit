import { sampleSize } from '../../src/collection';

const users = [
	{ user: 'barney', age: 36, active: false },
	{ user: 'fred', age: 40, active: true },
];

describe('Collection', () => {
	describe('sampleSize', () => {
		it('sampleSize(data, 2)', () => {
			const data = [1, 2, 3, 4, 5];

			const sampleRecords = sampleSize(data, 2);
			expect(sampleRecords.length).toEqual(2);
		});

		it('sampleSize(users, 1)', () => {
			const sampleRecords = sampleSize(users, 1);
			const sampleRecordUsingId = users.find(
				f => f.user === sampleRecords[0].user
			);
			expect(sampleRecords).toEqual([sampleRecordUsingId]);
		});
	});
});
