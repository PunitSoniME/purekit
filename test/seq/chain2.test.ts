// import _chain from 'lodash/chain';
import _ from 'lodash';
import { chain2 } from '../../src/seq';
import { map, sortBy } from '../../src/collection';
import { head } from '../../src/array';

const users = [
	{ user: 'barney', age: 36 },
	{ user: 'fred', age: 40 },
	{ user: 'pebbles', age: 1 },
];

const youngest = chain2(users)
	.fn(sortBy, 'age')
	.fn(map, function (o: any) {
		return o.user + ' is ' + o.age;
	})
	.fn(head)
	.value();

const _youngest = _.chain(users)
	.sortBy('age')
	.map(function (o) {
		return o.user + ' is ' + o.age;
	})
	.head()
	.value();

describe('Seq', () => {
	describe('chain2', () => {
		it('chain2()', () => {
			expect(youngest).toEqual(_youngest);
		});
	});
});
