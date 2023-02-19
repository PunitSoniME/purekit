import { thru as _thru } from 'lodash';
import { thru } from '../../src/seq';

describe('Seq', () => {
	describe('thru', () => {
		it('thru(5, (x: number) => x * 2)', () => {
			expect(thru(5, (x: number) => x * 2)).toEqual(
				_thru(5, (x: number) => x * 2)
			);
		});
	});
});
