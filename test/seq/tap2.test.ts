// import _chain from 'lodash/chain';
import _ from 'lodash';
import { tap2 } from '../../src/seq';
import { concat } from '../../src/array';

const data = [1, 2, 3];
const _data = [1, 2, 3];

const tappedData = tap2(data, (array: number[]) => {
	// Mutate input array.
	array.push(100);
})
	.fn(concat, [4])
	.fn(concat, [5])
	.value();

const _tappedData = _(_data)
	.tap((array: number[]) => {
		// Mutate input array.
		array.push(100);
	})
	.concat([4])
	.concat([5])
	.value();

describe('Seq', () => {
	describe('tap2', () => {
		it('tap2()', () => {
			expect(tappedData).toEqual(_tappedData);
		});
	});
});
