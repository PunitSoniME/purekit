import _fromPairs from 'lodash/fromPairs';
import { fromPairs } from '../../src/array';

const data = [
	['a', 1],
	['b', 2],
];

describe('Array', () => {
	describe('fromPairs', () => {
		it("fromPairs([['a', 1], ['b', 2]])", () => {
			expect(fromPairs(data)).toEqual(_fromPairs(data));
		});
	});
});
