import _flatMapDeep from 'lodash/flatMapDeep';
import { flatMapDeep } from '../../src/collection';

describe('Collection', () => {
	describe('flatMapDeep', () => {
		it('flatMapDeep([1, 2], (o: any) => [[[o, o]]])', () => {
			const predicate = (o: any) => [[[o, o]]];
			expect(flatMapDeep([1, 2], predicate)).toEqual(
				_flatMapDeep([1, 2], predicate)
			);
		});
	});
});
