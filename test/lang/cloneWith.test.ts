/**
 * @jest-environment jsdom
 */
import _cloneWith from 'lodash/cloneWith';
import _isElement from 'lodash/isElement';
import { cloneWith, isElement } from '../../src/lang';

function customizer(value: any) {
	if (isElement(value)) {
		return value.cloneNode(false);
	}
}

function _customizer(value: any) {
	if (_isElement(value)) {
		return value.cloneNode(false);
	}
}

var el = cloneWith(document.body, customizer);
var _el = _cloneWith(document.body, _customizer);

describe('Lang', () => {
	describe('cloneWith', () => {
		it('cloneWith(document.body, customizer)', () => {
			expect(el === document.body).toEqual(_el === document.body);
			expect(el.nodeName).toEqual(_el.nodeName);
			expect(el.childNodes.length).toEqual(_el.childNodes.length);
		});
	});
});
