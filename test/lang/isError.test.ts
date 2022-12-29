import _isError from 'lodash/isError';
import { isError } from '../../src/lang';

describe('Lang', () => {
	describe('isError', () => {
		it('isError(new Error)', () => {
			expect(isError(new Error())).toEqual(_isError(new Error()));
		});

		it('isError(Error)', () => {
			expect(isError(Error)).toEqual(_isError(Error));
		});

		it('isError(new EvalError)', () => {
			expect(isError(new EvalError())).toEqual(_isError(new EvalError()));
		});

		it('isError(new RangeError)', () => {
			expect(isError(new RangeError())).toEqual(_isError(new RangeError()));
		});

		it('isError(new ReferenceError)', () => {
			expect(isError(new ReferenceError())).toEqual(
				_isError(new ReferenceError())
			);
		});

		it('isError(new SyntaxError)', () => {
			expect(isError(new SyntaxError())).toEqual(_isError(new SyntaxError()));
		});

		it('isError(new TypeError)', () => {
			expect(isError(new TypeError())).toEqual(_isError(new TypeError()));
		});

		it('isError(new URIError)', () => {
			expect(isError(new URIError())).toEqual(_isError(new URIError()));
		});
	});
});
