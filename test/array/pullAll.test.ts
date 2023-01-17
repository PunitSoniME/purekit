import _pullAll from 'lodash/pullAll';
import { pullAll } from '../../src/array';

var data = ['a', 'b', 'c', 'a', 'b', 'c'];
var _data = ['a', 'b', 'c', 'a', 'b', 'c'];

describe('Array', () => {
	describe('pullAll', () => {
		it("pullAll(data, ['a', 'c'])", () => {
			pullAll(data, ['a', 'c']);
			_pullAll(_data, ['a', 'c']);

			expect(data).toEqual(_data);
		});
	});
});
