import _defaultTo from 'lodash/defaultTo';
import { defaultTo } from '../../src/util';

describe('Util', () => {
	describe('defaultsTo', () => {
		it('defaultTo(1, 10)', () => {
			expect(defaultTo(1, 10)).toEqual(_defaultTo(1, 10));
		});

		it('defaultTo(undefined, 10)', () => {
			expect(defaultTo(undefined, 10)).toEqual(_defaultTo(undefined, 10));
		});
	});
});
