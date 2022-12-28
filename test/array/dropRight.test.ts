import _dropRight from 'lodash/dropRight';
import { dropRight } from '../../src/array';

describe('Array', () => {
	describe('dropRight', () => {
		const data = [1, 2, 3];

		it('dropRight(data)', () => {
			expect(dropRight(data)).toEqual(_dropRight(data));
		});

		it('dropRight(data, 2)', () => {
			expect(dropRight(data, 2)).toEqual(_dropRight(data, 2));
		});

		it('dropRight(data, 5)', () => {
			expect(dropRight(data, 5)).toEqual(_dropRight(data, 5));
		});

		it('dropRight(data, 0)', () => {
			expect(dropRight(data, 0)).toEqual(_dropRight(data, 0));
		});
	});
});
