import _eq from 'lodash/eq';
import { eq } from '../../src/lang';

const object = { a: 1 };
const other = { a: 1 };

describe('Lang', () => {
	describe('eq', () => {
		it('eq(object, object)', () => {
			expect(eq(object, object)).toEqual(_eq(object, object));
		});

		it('eq(object, other)', () => {
			expect(eq(object, other)).toEqual(_eq(object, other));
		});

		it("eq('a', 'a')", () => {
			expect(eq('a', 'a')).toEqual(_eq('a', 'a'));
		});

		it("eq('a', Object('a'))", () => {
			expect(eq('a', Object('a'))).toEqual(_eq('a', Object('a')));
		});

		it('eq(NaN, NaN)', () => {
			expect(eq(NaN, NaN)).toEqual(_eq(NaN, NaN));
		});
	});
});
