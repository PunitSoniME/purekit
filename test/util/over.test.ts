import _over from 'lodash/over';
import { over } from '../../src/util';

const func = over([Math.max, Math.min]);
const _func = _over([Math.max, Math.min]);

describe('Util', () => {
	describe('over', () => {
		it('over([Math.max, Math.min])', () => {
			expect(func(1, 2, 3, 4)).toEqual(_func(1, 2, 3, 4));
		});
	});
});
