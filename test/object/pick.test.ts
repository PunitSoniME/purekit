import _pick from 'lodash/pick';
import { pick } from '../../src/object';

const object = { a: 1, b: '2', c: 3 };

describe('Object', () => {
	describe('pick', () => {
		it("pick(object, ['a', 'c'])", () => {
			expect(pick(object, ['a', 'c'])).toEqual(_pick(object, ['a', 'c']));
		});
	});
});
