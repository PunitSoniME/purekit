import _spread from 'lodash/spread';
import { spread } from '../../src/function';

const fn = (who: string, what: string) => who + ' says ' + what;
const numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)]);

describe('Function', () => {
	describe('spread', () => {
		it("say(['fred', 'hello'])", () => {
			const say = spread(fn);
			const _say = _spread(fn);

			expect(say(['fred', 'hello'])).toEqual(_say(['fred', 'hello']));
		});

		it('spread((x: number, y: number) => x + y)', async () => {
			const value = await numbers.then(
				spread(function (x: number, y: number) {
					return x + y;
				})
			);

			const _value = await numbers.then(
				_spread(function (x: number, y: number) {
					return x + y;
				})
			);

			expect(value).toEqual(_value);
		});
	});
});
