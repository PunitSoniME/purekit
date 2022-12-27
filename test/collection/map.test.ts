import _map from 'lodash/map';
import { map } from '../../src/collection';

function square(n: number) {
	return n * n;
}

const users = [{ user: 'barney' }, { user: 'fred' }];

describe('Collection', () => {
	describe('map', () => {
		it('map([4, 8], square)', () => {
			expect(map([4, 8], square)).toEqual(_map([4, 8], square));
		});

		it("map({ 'a': 4, 'b': 8 }, square)", () => {
			expect(map({ a: 4, b: 8 }, square)).toEqual(_map({ a: 4, b: 8 }, square));
		});

		it("map(users, 'user')", () => {
			expect(map(users, 'user')).toEqual(_map(users, 'user'));
		});
	});
});
