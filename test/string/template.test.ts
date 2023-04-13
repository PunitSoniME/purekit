import _template from 'lodash/template';
import { template } from '../../src/string';

describe('String', () => {
	describe('template', () => {
		it("template('hello <%= user %>!')", () => {
			const htmlTemplate = 'hello <%= user %>!';

			const compiled = template(htmlTemplate);
			const _compiled = _template(htmlTemplate);

			const value = { user: 'fred' };

			expect(compiled(value)).toEqual(_compiled(value));
		});

		it("template('<b><%- value %></b>')", () => {
			const htmlTemplate = '<b><%- value %></b>';

			const compiled = template(htmlTemplate);
			const _compiled = _template(htmlTemplate);

			const value = { value: '<script>' };

			expect(compiled(value)).toEqual(_compiled(value));
		});

		// it("template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>')", () => {
		// 	const htmlTemplate = '<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>';

		// 	const compiled = template(htmlTemplate);
		// 	const _compiled = _template(htmlTemplate);

		// 	const value = { 'users': ['fred', 'barney'] };

		// 	expect(compiled(value)).toEqual(_compiled(value));
		// });
	});
});
