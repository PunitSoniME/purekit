import { conforms as _conforms } from 'lodash';
import _filter from 'lodash/filter';
import { conforms } from '../../src/util';
import { filter } from '../../src/collection';

const objects = [
	{ a: 2, b: 1 },
	{ a: 1, b: 2 },
];

const predicateObject = {
	a: function (n: number) {
		return n < 1;
	},
	b: function (n: number) {
		return n > 1;
	},
};

describe('Util', () => {
	describe('conforms', () => {
		it('conforms(predicateObject)', () => {
			expect(filter(objects, conforms(predicateObject))).toEqual(
				_filter(objects, _conforms(predicateObject))
			);
		});
	});
});
