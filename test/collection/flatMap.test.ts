import { flatMap as _flatMap } from 'lodash';
import { flatMap } from '../../src/collection';

describe('Collection', () => {
	describe('flatMap', () => {
		it('flatMap([1, 2], (o: any) => [o, o])', () => {
			const predicate = (o: any) => [o, o];
			expect(flatMap([1, 2], predicate)).toEqual(_flatMap([1, 2], predicate));
		});
	});
});
