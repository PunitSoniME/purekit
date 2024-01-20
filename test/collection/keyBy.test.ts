import _keyBy from 'lodash/keyBy';
import { keyBy } from '../../src/collection';

const data = [
	{ dir: 'left', code: 97 },
	{ dir: 'left', code: 98 },
	{ dir: 'right', code: 100 },
];

describe('Collection', () => {
	describe('keyBy', () => {
		it('keyBy(data, (o: any) => String.fromCharCode(o.code))', () => {
			expect(keyBy(data, (o: any) => String.fromCharCode(o.code))).toEqual(
				_keyBy(data, (o: any) => String.fromCharCode(o.code))
			);
		});

		it("keyBy(data, 'dir')", () => {
			expect(keyBy(data, 'dir')).toEqual(_keyBy(data, 'dir'));
		});

		it("keyBy(['a', 'b'], (_, index) => index)", () => {
			expect(keyBy(['a', 'b'], (_: any, index: number) => index)).toEqual({
				0: 'a',
				1: 'b',
			});
		});
	});
});
