import _compact from 'lodash/compact';
import { compact } from '../../src/array';

describe('Array', () => {
	describe('compact', () => {
		it('It should remove the falsy values', () => {
			const collection = [1, '', false, null, 0, undefined, 'abc', 'XYZ'];
			expect(compact(collection)).toEqual(_compact(collection));
		});
	});
});
