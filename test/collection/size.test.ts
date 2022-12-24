import { size as _size } from 'lodash';
import { size } from '../../src/collection';

describe('Collection', () => {
	describe('size', () => {
		it('size([1, 2, 3])', () => {
			const data = [1, 2, 3];
			expect(size(data)).toEqual(_size(data));
		});

		it("size({ 'a': 1, 'b': 2 })", () => {
			const data = { a: 1, b: 2 };
			expect(size(data)).toEqual(_size(data));
		});

		it("size('pebbles')", () => {
			const data = 'pebbles';
			expect(size(data)).toEqual(_size(data));
		});
	});
});
