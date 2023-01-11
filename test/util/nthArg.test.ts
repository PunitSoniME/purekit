import _nthArg from 'lodash/nthArg';
import { nthArg } from '../../src/util';

describe('Util', () => {
	describe('nthArg', () => {
		it('nthArg(1)', () => {
			const func = nthArg(1);
			const _func = _nthArg(1);

			expect(func('a', 'b', 'c', 'd')).toEqual(_func('a', 'b', 'c', 'd'));
		});

		it('nthArg(-2)', () => {
			const func = nthArg(-2);
			const _func = _nthArg(-2);

			expect(func('a', 'b', 'c', 'd')).toEqual(_func('a', 'b', 'c', 'd'));
		});
	});
});
