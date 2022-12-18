import { flatMapDepth as _flatMapDepth } from 'lodash';
import { flatMapDepth } from '../../src/collection';

describe('Collection', () => {
	describe('flatMapDepth', () => {
		it('flatMapDepth([1, 2], (o: any) => [[[o, o]]], 2)', () => {
			const predicate = (o: any) => [[[o, o]]];
			expect(flatMapDepth([1, 2], predicate, 2)).toEqual(
				_flatMapDepth([1, 2], predicate, 2)
			);
		});
	});
});
