import _identity from 'lodash/identity';
import { identity } from '../../src/util';

describe('Util', () => {
	describe('identity', () => {
		it('identity(object) === object)', () => {
			const object = { a: 1 };
			expect(identity(object) === object).toEqual(_identity(object) === object);
		});
	});
});
