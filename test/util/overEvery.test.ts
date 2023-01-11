import _overEvery from 'lodash/overEvery';
import { overEvery } from '../../src/util';

const func = overEvery([Boolean, isFinite]);
const _func = _overEvery([Boolean, isFinite]);

describe('Util', () => {
	describe('overEvery', () => {
		it("overEvery([Boolean, isFinite]) > func('1')", () => {
			//	@ts-ignore
			expect(func('1')).toEqual(_func('1'));
		});

		it('overEvery([Boolean, isFinite]) > func(null)', () => {
			//	@ts-ignore
			expect(func(null)).toEqual(_func(null));
		});

		it('overEvery([Boolean, isFinite]) > func(NaN)', () => {
			//	@ts-ignore
			expect(func(NaN)).toEqual(_func(NaN));
		});
	});
});
