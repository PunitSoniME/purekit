import _parseInt from 'lodash/parseInt';
import _map from 'lodash/map';
import { map } from '../../src/collection';
import { parseInt } from '../../src/string';

describe('String', () => {
	describe('parseInt', () => {
		it("parseInt('08')", () => {
			expect(parseInt('08')).toEqual(_parseInt('08'));
		});

		it("map(['6', '08', '10'], parseInt)", () => {
			expect(map(['6', '08', '10'], parseInt)).toEqual(
				_map(['6', '08', '10'], _parseInt)
			);
		});
	});
});
