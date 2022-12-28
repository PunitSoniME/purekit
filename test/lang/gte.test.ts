import _gte from 'lodash/gte';
import { gte } from '../../src/lang';

describe('Lang', () => {
	describe('gte', () => {
		it('gte(3, 1)', () => {
			expect(gte(3, 1)).toEqual(_gte(3, 1));
		});

		it('gte(3, 3)', () => {
			expect(gte(3, 3)).toEqual(_gte(3, 3));
		});

		it('gte(1, 3)', () => {
			expect(gte(1, 3)).toEqual(_gte(1, 3));
		});
	});
});
