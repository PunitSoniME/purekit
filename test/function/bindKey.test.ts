import _bindKey from 'lodash/bindKey';
import { bindKey } from '../../src/function';
import * as __ from 'lodash';
import _ from '../../dist';

var object = {
	user: 'fred',
	greet: function (greeting: string, punctuation: string) {
		//	@ts-ignore
		return greeting + ' ' + this.user + punctuation;
	},
};

describe('Function', () => {
	describe('bindKey', () => {
		it("bound('!')", () => {
			var bound = bindKey(object, 'greet', 'hi');
			var _bound = _bindKey(object, 'greet', 'hi');
			expect(bound('!')).toEqual(_bound('!'));
		});

		object.greet = function (greeting, punctuation) {
			return greeting + 'ya ' + this.user + punctuation;
		};

		it("bound('!')", () => {
			var bound = bindKey(object, 'greet', 'hi');
			var _bound = _bindKey(object, 'greet', 'hi');
			expect(bound('!')).toEqual(_bound('!'));
		});

		it("bound('hi')", () => {
			var bound = bindKey(object, 'greet', _, '!');
			var _bound = _bindKey(object, 'greet', __, '!');
			expect(bound('hi')).toEqual(_bound('hi'));
		});
	});
});
