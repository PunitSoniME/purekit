import _isMatchWith from 'lodash/isMatchWith';
import { isMatchWith } from '../../src/lang';

function isGreeting(value: string) {
	return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue: string, srcValue: string) {
	if (isGreeting(objValue) && isGreeting(srcValue)) {
		return true;
	}
	return false;
}

var object = { greeting: 'hello' };
var source = { greeting: 'hi' };

describe('Lang', () => {
	describe('isMatchWith', () => {
		it('isMatchWith(object, source, customizer)', () => {
			expect(isMatchWith(object, source, customizer)).toEqual(
				_isMatchWith(object, source, customizer)
			);
		});
	});
});
