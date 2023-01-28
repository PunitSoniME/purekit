//	@ts-nocheck
import _extendWith from 'lodash/extendWith';
import _isUndefined from 'lodash/isUndefined';
import _partialRight from 'lodash/partialRight';

import { extendWith } from '../../src/object';
import { isUndefined } from '../../src/lang';
import { partialRight } from '../../src/function';

function customizer(objValue: number, srcValue: number) {
	return isUndefined(objValue) ? srcValue : objValue;
}
const defaults = partialRight(extendWith, customizer);

function _customizer(objValue: number, srcValue: number) {
	return _isUndefined(objValue) ? srcValue : objValue;
}
const _defaults = _partialRight(_extendWith, _customizer);

describe('Object', () => {
	describe('extendWith', () => {
		it("defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })", () => {
			expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual(
				_defaults({ a: 1 }, { b: 2 }, { a: 3 })
			);
		});
	});
});
