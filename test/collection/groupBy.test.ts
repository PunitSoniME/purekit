import { groupBy as _groupBy } from 'lodash';
import { groupBy } from '../../src/collection';

describe('Collection', () => {
	describe('groupBy', () => {
		it('[Array Of Number] It returns the group by based on passed predicate - Number', () => {
			expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual(
				_groupBy([6.1, 4.2, 6.3], Math.floor)
			);
		});

		it('[Array Of String] It returns the group by based on passed predicate - String', () => {
			expect(groupBy(['one', 'two', 'three'], 'length')).toEqual(
				_groupBy(['one', 'two', 'three'], 'length')
			);
		});

		it('[Array Of Object] It returns the group by based on passed predicate - String', () => {
			const data = [
				{ name: 'apples', category: 'fruits' },
				{ name: 'oranges', category: 'fruits' },
				{ name: 'potatoes', category: 'vegetables' },
			];

			expect(groupBy(data, 'category')).toEqual(_groupBy(data, 'category'));
		});
	});
});
