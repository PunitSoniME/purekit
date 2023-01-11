import _overSome from 'lodash/overSome';
import { overSome } from '../../src/util';

const func = overSome([Boolean, isFinite]);
const _func = _overSome([Boolean, isFinite]);

describe('Util', () => {
	describe('overSome', () => {
		it("overSome([Boolean, isFinite]) > func('1')", () => {
			//	@ts-ignore
			expect(func('1')).toEqual(_func('1'));
		});

		it('overSome([Boolean, isFinite]) > func(null)', () => {
			//	@ts-ignore
			expect(func(null)).toEqual(_func(null));
		});

		it('overSome([Boolean, isFinite]) > func(NaN)', () => {
			//	@ts-ignore
			expect(func(NaN)).toEqual(_func(NaN));
		});
	});
});
