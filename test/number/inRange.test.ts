import { inRange as _inRange } from 'lodash';
import { inRange } from '../../src/number';

describe('Number', () => {
	describe('inRange', () => {
		it('inRange(3, 2, 4)', () => {
			expect(inRange(3, 2, 4)).toEqual(_inRange(3, 2, 4));
		});

		it('inRange(4, 8)', () => {
			expect(inRange(4, 8)).toEqual(_inRange(4, 8));
		});

		it('inRange(4, 2)', () => {
			expect(inRange(4, 2)).toEqual(_inRange(4, 2));
		});

		it('inRange(2, 2)', () => {
			expect(inRange(2, 2)).toEqual(_inRange(2, 2));
		});

		it('inRange(1.2, 2)', () => {
			expect(inRange(1.2, 2)).toEqual(_inRange(1.2, 2));
		});

		it('inRange(5.2, 4)', () => {
			expect(inRange(5.2, 4)).toEqual(_inRange(5.2, 4));
		});

		it('inRange(-3, -2, -6)', () => {
			expect(inRange(-3, -2, -6)).toEqual(_inRange(-3, -2, -6));
		});
	});
});
