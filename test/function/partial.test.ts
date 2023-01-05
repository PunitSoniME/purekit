import _partial from 'lodash/partial';
import { partial } from '../../src/function';

const greet = (greeting: string, name: string) => `${greeting} ${name}`;

describe('Function', () => {
	describe('partial', () => {
		it("partial(greet, 'hello')", () => {
			const sayHelloTo = partial(greet, 'hello');
			const _sayHelloTo = _partial(greet, 'hello');

			expect(sayHelloTo('fred')).toEqual(_sayHelloTo('fred'));
		});
	});
});
