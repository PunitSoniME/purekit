import _clone from 'lodash/clone';
import { clone } from '../../src/lang';

const objects = [{ a: 1 }, { b: 2 }];

let set = new Set();
set.add(1);
set.add(2);
set.add(3);

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

describe('Lang', () => {
	describe('clone', () => {
		it('clone(objects)', () => {
			const shallow = clone(objects);
			const _shallow = _clone(objects);

			expect(shallow[0] === objects[0]).toEqual(_shallow[0] === objects[0]);
		});

		it('clone(date)', () => {
			const date = new Date();
			const shallow = clone(date);
			const _shallow = _clone(date);

			expect(shallow === date).toEqual(_shallow === date);
		});

		it('clone(map)', () => {
			const shallow = clone(map);
			const _shallow = _clone(map);

			expect(shallow.get('a') === map.get('a')).toEqual(
				_shallow.get('a') === map.get('a')
			);
		});

		it('clone(set)', () => {
			const shallow = clone(set);
			const _shallow = _clone(set);

			const valueToCheck = 1;

			expect(shallow.has(valueToCheck) === set.has(valueToCheck)).toEqual(
				_shallow.has(valueToCheck) === set.has(valueToCheck)
			);
		});
	});
});
