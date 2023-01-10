import _omit from 'lodash/omit';
import { omit } from '../../src/object';

const object = { a: 1, b: '2', c: 3 };
const _object = { a: 1, b: '2', c: 3 };

describe('Object', () => {
	describe('omit', () => {
		it("omit(object, ['a', 'c']", () => {
			const omittedObject = omit(object, ['a', 'c']);
			const _omittedObject = _omit(_object, ['a', 'c']);
			expect(omittedObject).toEqual(_omittedObject);
		});
	});
});
