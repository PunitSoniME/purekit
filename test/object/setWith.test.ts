import _setWith from 'lodash/setWith';
import { setWith } from '../../src/object';

let object: any = {};

describe('Object', () => {
	describe('setWith', () => {
		it("setWith(object, '[0][1]', 'a', Object)", () => {
			expect(setWith(object, '[0][1]', 'a', Object)).toEqual(
				_setWith(object, '[0][1]', 'a', Object)
			);
		});
	});
});
