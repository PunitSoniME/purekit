//	@ts-nocheck
import _assignInWith from 'lodash/assignInWith';
import _isUndefined from 'lodash/isUndefined';
import _partialRight from 'lodash/partialRight';

import { assignInWith } from '../../src/object';
import { isUndefined } from '../../src/lang';
import { partialRight } from '../../src/function';

function customizer(objValue: number, srcValue: number) {
	return isUndefined(objValue) ? srcValue : objValue;
}
const defaults = partialRight(assignInWith, customizer);

function _customizer(objValue: number, srcValue: number) {
	return _isUndefined(objValue) ? srcValue : objValue;
}
const _defaults = _partialRight(_assignInWith, _customizer);

describe('Object', () => {
	describe('assignInWith', () => {
		it("defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })", () => {
			expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual(
				_defaults({ a: 1 }, { b: 2 }, { a: 3 })
			);
		});
	});
});
