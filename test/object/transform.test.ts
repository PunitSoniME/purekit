import _transform from 'lodash/transform';
import { transform } from '../../src/object';

describe('Object', () => {
	describe('transform', () => {
		it('transform([2, 3, 4], fn, [])', () => {
			const fn = (result: number[], n: number) => {
				result.push((n *= n));
				return n % 2 === 0;
			};

			const res = transform([2, 3, 4], fn, []);
			const _res = _transform([2, 3, 4], fn, []);

			expect(res).toEqual(_res);
		});

		it('transform([2, 3, 4], fn, {})', () => {
			const fn = (result: any, value: number, key: number) => {
				(result[value] || (result[value] = [])).push(key);
			};

			const res = transform([2, 3, 4], fn, {});
			const _res = _transform([2, 3, 4], fn, {});

			expect(res).toEqual(_res);
		});
	});
});
