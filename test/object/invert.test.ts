import _invert from 'lodash/invert';
import { invert } from '../../src/object';

const object = { a: 1, b: 2, c: 1 };

describe('Object', () => {
	describe('invert', () => {
		it('invert(object)', () => {
			expect(invert(object)).toEqual(_invert(object));
		});
	});
});
