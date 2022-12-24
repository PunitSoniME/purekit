import { sample } from '../../src/collection';

describe('Collection', () => {
	describe('sample', () => {
		it('sample(data)', () => {
			const data = [1, 2, 3, 4, 5];

			const sampleRecord = sample(data);
			expect(sampleRecord).toEqual(data.find(f => f === sampleRecord));
		});
	});
});
