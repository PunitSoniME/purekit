import _join from 'lodash/join';
import { join } from '../../src/array';

const data = ['a', 'b', 'c'];
const joiner = '~';

describe('Array', () => {
	describe('join', () => {
		it('join(data)', () => {
			expect(join(data)).toEqual(_join(data));
		});

		it('join(data, joiner)', () => {
			expect(join(data, joiner)).toEqual(_join(data, joiner));
		});
	});
});
