/**
 * @jest-environment jsdom
 */
import _isElement from 'lodash/isElement';
import { isElement } from '../../src/lang';

describe('Lang', () => {
	describe('isElement', () => {
		it('isElement(document.body)', () => {
			expect(isElement(document.body)).toEqual(_isElement(document.body));
		});

		it("isElement('<body>')", () => {
			expect(isElement('<body>')).toEqual(_isElement('<body>'));
		});
	});
});
