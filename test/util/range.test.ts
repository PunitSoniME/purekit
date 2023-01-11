import _range from 'lodash/range';
import { range } from '../../src/util';

describe('Util', () => {
	describe('range', () => {
		it('range(4)', () => {
			expect(range(4)).toEqual(_range(4));
		});

		it('range(-4)', () => {
			expect(range(-4)).toEqual(_range(-4));
		});

		it('range(1, 5)', () => {
			expect(range(1, 5)).toEqual(_range(1, 5));
		});

		it('range(0, 20, 5)', () => {
			expect(range(0, 20, 5)).toEqual(_range(0, 20, 5));
		});

		it('range(0, -4, -1)', () => {
			expect(range(0, -4, -1)).toEqual(_range(0, -4, -1));
		});

		it('range(1, 4, 0)', () => {
			expect(range(1, 4, 0)).toEqual(_range(1, 4, 0));
		});

		it('range(0)', () => {
			expect(range(0)).toEqual(_range(0));
		});
	});
});
