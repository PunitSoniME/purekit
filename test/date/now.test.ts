import _now from 'lodash/now';
import { now } from '../../src/date';

describe('Number', () => {
	describe('now', () => {
		it('now()', () => {
			expect(now()).toBeLessThanOrEqual(_now());
		});
	});
});
