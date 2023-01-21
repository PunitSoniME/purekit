import _add from 'lodash/add';
import { add } from '../../src/math';

describe('Math', () => {
	describe('add', () => {
		it('add(6, 4)', () => {
			expect(add(6, 4)).toEqual(_add(6, 4)); //	10
		});

		it('add(-6, 4)', () => {
			expect(add(-6, 4)).toEqual(_add(-6, 4)); //	-2
		});

		it('add(-6, -4)', () => {
			expect(add(-6, -4)).toEqual(_add(-6, -4)); //	-10
		});

		it("add(-'6', '4')", () => {
			//	@ts-ignore
			expect(add('6', '4')).toEqual(_add('6', '4')); //	'64'
		});

		it("add('x', 'y')", () => {
			//	@ts-ignore
			expect(add('x', 'y')).toEqual(_add('x', 'y')); //	'xy'
		});
	});
});
