import _bind from 'lodash/bind';
import { bind } from '../../src/function';
import * as __ from 'lodash';
import _ from './../../dist';

function greet(greeting: string, punctuation: string) {
	//	@ts-ignore
	return greeting + ' ' + this.user + punctuation;
}

var object = { user: 'fred' };

describe('Function', () => {
	describe('bind', () => {
		it("bound('!')", () => {
			var bound = bind(greet, object, 'hi');
			var _bound = _bind(greet, object, 'hi');
			expect(bound('!')).toEqual(_bound('!'));
		});

		it("bound('hi')", () => {
			var bound = bind(greet, object, _, '!');
			var _bound = _bind(greet, object, __, '!');
			expect(bound('hi')).toEqual(_bound('hi'));
		});
	});
});
