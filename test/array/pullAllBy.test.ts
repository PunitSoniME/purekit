import _pullAllBy from 'lodash/pullAllBy';
import { pullAllBy } from '../../src/array';

var data = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
var _data = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

describe('Array', () => {
	describe('pullAllBy', () => {
		it('pullAllBy([], [])', () => {
			pullAllBy([], []);
			_pullAllBy([], []);

			expect(data).toEqual(_data);
		});

		it("pullAllBy(data, [{ 'x': 1 }, { 'x': 3 }], 'x')", () => {
			pullAllBy(data, [{ x: 1 }, { x: 3 }], 'x');
			_pullAllBy(_data, [{ x: 1 }, { x: 3 }], 'x');

			expect(data).toEqual(_data);
		});
	});
});
