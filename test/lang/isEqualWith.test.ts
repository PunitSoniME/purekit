import _isEqualWith from 'lodash/isEqualWith';
import { isEqualWith } from '../../src/lang';

function isGreeting(value: string) {
	return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue: any, othValue: any) {
	if (isGreeting(objValue) && isGreeting(othValue)) {
		return true;
	}
	return false;
}

const array = ['hello', 'goodbye'];
const other = ['hi', 'goodbye'];

describe('Lang', () => {
	describe('isEqualWith', () => {
		it('isEqualWith(array, other, customizer)', () => {
			expect(isEqualWith(array, other, customizer)).toEqual(
				_isEqualWith(array, other, customizer)
			);
		});
	});
});
