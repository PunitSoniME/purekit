import _hasIn from 'lodash/hasIn';
import _create from 'lodash/create';
import { hasIn, create } from '../../src/object';

const object = create({ a: create({ b: 2 }) });
const _object = _create({ a: _create({ b: 2 }) });

describe('Object', () => {
	describe('hasIn', () => {
		it("hasIn(object, 'a')", () => {
			expect(hasIn(object, 'a')).toEqual(_hasIn(_object, 'a'));
		});

		it("hasIn(object, 'a.b')", () => {
			expect(hasIn(object, 'a.b')).toEqual(_hasIn(_object, 'a.b'));
		});

		it("hasIn(object, ['a', 'b'])", () => {
			expect(hasIn(object, ['a', 'b'])).toEqual(_hasIn(_object, ['a', 'b']));
		});

		it("hasIn(object, ['a', 'c'])", () => {
			expect(hasIn(object, ['a', 'c'])).toEqual(_hasIn(_object, ['a', 'c']));
		});

		it("hasIn(object, 'b')", () => {
			expect(hasIn(object, 'b')).toEqual(_hasIn(_object, 'b'));
		});
	});
});
