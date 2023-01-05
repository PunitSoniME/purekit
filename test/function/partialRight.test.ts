import _partialRight from 'lodash/partialRight';
import { partialRight } from '../../src/function';

const greet = (greeting: string, name: string) => `${greeting} ${name}`;

describe('Function', () => {
	describe('partialRight', () => {
		it("partialRight(greet, 'fred')", () => {
			const sayHiTo = partialRight(greet, 'fred');
			const _sayHiTo = _partialRight(greet, 'fred');

			expect(sayHiTo('hi')).toEqual(_sayHiTo('hi'));
		});
	});
});
