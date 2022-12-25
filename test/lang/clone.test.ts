import { clone as _clone } from 'lodash';
import { clone } from '../../src/lang';

const objects = [{ a: 1 }, { b: 2 }];

describe('Lang', () => {
	describe('clone', () => {
		it('clone(objects)', () => {
			const shallow = clone(objects);
			const _shallow = _clone(objects);

			expect(shallow[0] === objects[0]).toEqual(_shallow[0] === objects[0]);
		});
	});
});
