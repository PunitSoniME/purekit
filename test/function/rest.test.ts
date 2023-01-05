import _rest from 'lodash/rest';
import { rest } from '../../src/function';

const say = rest(
	(what: string, names: string[]) =>
		what +
		' ' +
		names.slice(0, -1).join(', ') + // see _.initial
		(names.length > 1 ? ', & ' : '') +
		names[names.length - 1] // see _.last
);

const _say = _rest(
	(what: string, names: string[]) =>
		what +
		' ' +
		names.slice(0, -1).join(', ') + // see _.initial
		(names.length > 1 ? ', & ' : '') +
		names[names.length - 1] // see _.last
);

describe('Function', () => {
	describe('rest', () => {
		it("say('hello', 'fred', 'barney', 'pebbles')", () => {
			expect(say('hello', 'fred', 'barney', 'pebbles')).toEqual(
				_say('hello', 'fred', 'barney', 'pebbles')
			);
		});
	});
});
