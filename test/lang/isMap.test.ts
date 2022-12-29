import _isMap from 'lodash/isMap';
import { isMap } from '../../src/lang';

describe('Lang', () => {
	describe('isMap', () => {
		it('isMap(new Map)', () => {
			expect(isMap(new Map)).toEqual(_isMap(new Map));
		});

		it('isMap(new WeakMap)', () => {
			expect(isMap(new WeakMap)).toEqual(_isMap(new WeakMap));
		});
	});
});
