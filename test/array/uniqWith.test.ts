import _uniqWith from 'lodash/uniqWith';
import _isEqual from 'lodash/isEqual';
import { uniqWith } from '../../src/array';
import { isEqual } from '../../src/lang';

const objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 1, y: 2 },
];

describe('Array', () => {
	describe('uniqWith', () => {
		it('uniqWith(objects, isEqual)', () => {
			expect(uniqWith(objects, isEqual)).toEqual(_uniqWith(objects, _isEqual));
		});
	});
});
