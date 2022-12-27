import _countBy from 'lodash/countBy';
import { countBy } from '../../src/collection';

describe('Collection', () => {
	describe('countBy', () => {
		it('[Array Of Number] It returns the count by based on passed predicate - Number', () => {
			expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual(
				_countBy([6.1, 4.2, 6.3], Math.floor)
			);
		});

		it('[Array Of String] It returns the count by based on passed predicate - String', () => {
			expect(countBy(['one', 'two', 'three'], 'length')).toEqual(
				_countBy(['one', 'two', 'three'], 'length')
			);
		});
	});
});
