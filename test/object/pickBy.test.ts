import _pickBy from 'lodash/pickBy';
import _isNumber from 'lodash/isNumber';
import { pickBy } from '../../src/object';
import { isNumber } from '../../src/lang';

const object = { a: 1, b: '2', c: 3 };

describe('Object', () => {
	describe('pickBy', () => {
		it('pickBy(object, _isNumber)', () => {
			expect(pickBy(object, isNumber)).toEqual(_pickBy(object, _isNumber));
		});
	});
});
