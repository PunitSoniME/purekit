import _attempt from 'lodash/attempt';
import { attempt } from '../../src/util';

const predicate = (item: string) => item.split('');

describe('Util', () => {
	describe('attempt', () => {
		it("attempt(predicate, 'string')", () => {
			expect(attempt(predicate, 'string')).toEqual(
				_attempt(predicate, 'string')
			);
		});
	});
});
