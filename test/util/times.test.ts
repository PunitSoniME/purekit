import { times as _times } from 'lodash';
import _constant from 'lodash/constant';
import { times } from '../../src/util';
import { constant } from '../../src/util';

describe('Util', () => {
	describe('times', () => {
		it('times(3, String)', () => {
			expect(times(3, String)).toEqual(_times(3, String));
		});

		it('times(4, constant(0))', () => {
			expect(times(4, constant(0))).toEqual(_times(4, _constant(0)));
		});
	});
});
