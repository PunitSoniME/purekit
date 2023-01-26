import _invertBy from 'lodash/invertBy';
import { invertBy } from '../../src/object';

const object = { a: 1, b: 2, c: 1 };
const iteratee = (value: string) => 'group' + value;

describe('Object', () => {
	describe('invertBy', () => {
		it('invertBy(object)', () => {
			expect(invertBy(object)).toEqual(_invertBy(object));
		});

		it('invertBy(object, iteratee)', () => {
			expect(invertBy(object, iteratee)).toEqual(_invertBy(object, iteratee));
		});
	});
});
