import _rangeRight from 'lodash/rangeRight';
import { rangeRight } from '../../src/util';

describe('Util', () => {
	describe('rangeRight', () => {
		it('rangeRight(4)', () => {
			expect(rangeRight(4)).toEqual(_rangeRight(4));
		});

		it('rangeRight(-4)', () => {
			expect(rangeRight(-4)).toEqual(_rangeRight(-4));
		});

		it('rangeRight(1, 5)', () => {
			expect(rangeRight(1, 5)).toEqual(_rangeRight(1, 5));
		});

		it('rangeRight(0, 20, 5)', () => {
			expect(rangeRight(0, 20, 5)).toEqual(_rangeRight(0, 20, 5));
		});

		it('rangeRight(0, -4, -1)', () => {
			expect(rangeRight(0, -4, -1)).toEqual(_rangeRight(0, -4, -1));
		});

		it('rangeRight(1, 4, 0)', () => {
			expect(rangeRight(1, 4, 0)).toEqual(_rangeRight(1, 4, 0));
		});

		it('rangeRight(0)', () => {
			expect(rangeRight(0)).toEqual(_rangeRight(0));
		});
	});
});
