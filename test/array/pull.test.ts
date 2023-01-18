import _pull from 'lodash/pull';
import { pull } from '../../src/array';

const data = ['a', 'b', 'c', 'a', 'b', 'c'];
const _data = ['a', 'b', 'c', 'a', 'b', 'c'];

describe('Array', () => {
	describe('pull', () => {
		it("pull(data, 'a', 'c')", () => {
			pull(data, 'a', 'c');
			_pull(_data, 'a', 'c');
			expect(data).toEqual(_data);
		});
	});
});
