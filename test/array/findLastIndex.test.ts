import _findLastIndex from 'lodash/findLastIndex';
import { findLastIndex } from '../../src/array';
import { numberMockData, stringMockData, usersMockData } from '../mockData';

describe('Array', () => {
	describe('findLastIndex', () => {
		it('findLastIndex([])', () => {
			expect(findLastIndex([])).toEqual(_findLastIndex([]));
		});

		it("findLastIndex(usersMockData, (o: any) => o.user === 'pebbles')", () => {
			const predicate = (o: any) => o.user === 'pebbles';
			expect(findLastIndex(usersMockData, predicate)).toEqual(
				_findLastIndex(usersMockData, predicate)
			);
		});

		it("findLastIndex(usersMockData, { user: 'barney', active: true })", () => {
			const predicate = { user: 'barney', active: true };
			expect(findLastIndex(usersMockData, predicate)).toEqual(
				_findLastIndex(usersMockData, predicate)
			);
		});

		it("findLastIndex(usersMockData, ['active', false])", () => {
			expect(findLastIndex(usersMockData, ['active', false])).toEqual(
				_findLastIndex(usersMockData, ['active', false])
			);
		});

		it("findLastIndex(usersMockData, 'active')", () => {
			expect(findLastIndex(usersMockData, 'active')).toEqual(
				_findLastIndex(usersMockData, 'active')
			);
		});

		it('findLastIndex(numberMockData, 100)', () => {
			expect(findLastIndex(numberMockData, 100)).toEqual(
				_findLastIndex(numberMockData, 100)
			);
		});

		it("findLastIndex(stringMockData, 'z')", () => {
			expect(findLastIndex(stringMockData, 'z')).toEqual(
				_findLastIndex(stringMockData, 'z')
			);
		});

		it("findLastIndex(stringMockData, 'z', 3)", () => {
			expect(findLastIndex(stringMockData, 'z', 3)).toEqual(
				_findLastIndex(stringMockData, 'z', 3)
			);
		});
	});
});
