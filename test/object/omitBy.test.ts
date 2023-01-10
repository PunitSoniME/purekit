import _omitBy from 'lodash/omitBy';
import { omitBy } from '../../src/object';
import { isNumber } from '../../src/lang';

const object = { a: 1, b: '2', c: 3 };

describe('Object', () => {
	describe('omitBy', () => {
		it('omitBy(object, isNumber', () => {
			expect(omitBy(object, isNumber)).toEqual(_omitBy(object, isNumber));
		});
	});
});
