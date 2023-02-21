import _unary from 'lodash/unary';
import _map from 'lodash/map';
import _parseInt from 'lodash/parseInt';
import { unary } from '../../src/function';
import { parseInt } from '../../src/string';
import { map } from '../../src/collection';

describe('Function', () => {
	describe('unary', () => {
		it("['6', '8', '10'].map(unary(Number.parseInt))", () => {
			const data = ['6', '8', '10'];
			expect(map(data, unary(parseInt))).toEqual(_map(data, _unary(_parseInt)));
		});
	});
});
