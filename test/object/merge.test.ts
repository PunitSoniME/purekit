import _merge from 'lodash/merge';
import { merge } from '../../src/object';

const object = {
	a: [{ b: 2 }, { d: 4 }],
};

const other = {
	a: [{ c: 3 }, { e: 5 }],
};

describe('Object', () => {
	describe('merge', () => {
		it('merge(object, other)', () => {
			expect(merge(object, other)).toEqual(_merge(object, other));
		});
	});
});
