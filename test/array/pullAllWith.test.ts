import _pullAllWith from 'lodash/pullAllWith';
import _isEqual from 'lodash/isEqual';
import { pullAllWith } from '../../src/array';
import isEqual from '../../src/lang/isEqual';

var data = [
	{ x: 1, y: 2 },
	{ x: 3, y: 4 },
	{ x: 5, y: 6 },
];
var _data = [
	{ x: 1, y: 2 },
	{ x: 3, y: 4 },
	{ x: 5, y: 6 },
];

describe('Array', () => {
	describe('pullAllWith', () => {
		it("pullAllWith(data, [{ 'x': 3, 'y': 4 }], isEqual)", () => {
			pullAllWith(data, [{ x: 3, y: 4 }], isEqual);
			_pullAllWith(_data, [{ x: 3, y: 4 }], _isEqual);

			expect(data).toEqual(_data);
		});
	});
});
