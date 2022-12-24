import { shuffle } from '../../src/collection';

describe('Collection', () => {
	describe('shuffle', () => {
		it('shuffle(data, 5)', () => {
			const data = [1, 2, 3, 4, 5];

			const shuffledRecords = shuffle(data);
			expect(shuffledRecords.length).toEqual(data.length);
		});
	});
});
