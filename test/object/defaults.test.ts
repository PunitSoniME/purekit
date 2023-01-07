import _defaults from 'lodash/defaults';
import { defaults } from '../../src/object';

describe('Object', () => {
	describe('defaults', () => {
		it('defaults({ a: 1 }, { b: 2 }, { a: 3 })', () => {
			expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual(
				_defaults({ a: 1 }, { b: 2 }, { a: 3 })
			);
		});
	});
});
