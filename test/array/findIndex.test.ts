import _findIndex from 'lodash/findIndex';
import { findIndex } from '../../src/array';
import { numberMockData, usersMockData, stringMockData } from '../mockData';

describe('Array', () => {
	describe('findIndex', () => {
		it("findIndex(usersMockData, (o: any) => { return o.user === 'barney'; })", () => {
			const predicate = (o: any) => {
				return o.user === 'barney';
			};

			expect(findIndex(usersMockData, predicate)).toEqual(
				_findIndex(usersMockData, predicate)
			);
		});

		it("findIndex(usersMockData, { user: 'barney' })", () => {
			const predicate = { user: 'barney' };

			expect(findIndex(usersMockData, predicate)).toEqual(
				_findIndex(usersMockData, predicate)
			);
		});

		it("findIndex(usersMockData, ['active', false])", () => {
			expect(findIndex(usersMockData, ['active', false])).toEqual(
				_findIndex(usersMockData, ['active', false])
			);
		});

		it('findIndex(numberMockData, 100)', () => {
			expect(findIndex(numberMockData, 100)).toEqual(
				_findIndex(numberMockData, 100)
			);
		});

		it("findIndex(stringMockData, 'z')", () => {
			expect(findIndex(stringMockData, 'z')).toEqual(
				_findIndex(stringMockData, 'z')
			);
		});
	});
});
