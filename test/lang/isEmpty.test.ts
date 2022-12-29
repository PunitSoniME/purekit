import _isEmpty from 'lodash/isEmpty';
import { isEmpty } from '../../src/lang';

describe('Lang', () => {
	describe('isEmpty', () => {
		it('isEmpty(null)', () => {
			expect(isEmpty(null)).toEqual(_isEmpty(null));
		});

		it('isEmpty(true)', () => {
			expect(isEmpty(true)).toEqual(_isEmpty(true));
		});

		it('isEmpty(1)', () => {
			expect(isEmpty(1)).toEqual(_isEmpty(1));
		});

		it('isEmpty([1, 2, 3])', () => {
			expect(isEmpty([1, 2, 3])).toEqual(_isEmpty([1, 2, 3]));
		});

		it("isEmpty({'a': 1})", () => {
			expect(isEmpty({ a: 1 })).toEqual(_isEmpty({ a: 1 }));
		});

		it('isEmpty(undefined)', () => {
			expect(isEmpty(undefined)).toEqual(_isEmpty(undefined));
		});

		it('isEmpty("Hello")', () => {
			expect(isEmpty('Hello')).toEqual(_isEmpty('Hello'));
		});
	});
});
