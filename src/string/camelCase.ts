/**
 * Converts a string to camelCase.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to convert to camelCase.
 *
 * @returns {string} - The camelCased string.
 *
 * @example
 * const str1 = 'foo_bar';
 * const str2 = 'hello-world';
 * const str3 = 'Foo Bar';
 * const str4 = 'FOO-BAR';
 *
 * const result1 = camelCase(str1); // 'fooBar'
 * const result2 = camelCase(str2); // 'helloWorld'
 * const result3 = camelCase(str3); // 'fooBar'
 * const result4 = camelCase(str4); // 'fooBar'
 */
const camelCase = (str: string = ''): string => {
	return str
		.replace(new RegExp(/[-_]+/, 'g'), ' ')
		.replace(new RegExp(/[^\w\s]/, 'g'), '')
		.replace(
			new RegExp(/\s+(.)(\w+)/, 'g'),
			(_, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
		)
		.replace(new RegExp(/\s/, 'g'), '')
		.replace(new RegExp(/\w/), s => s.toLowerCase());
};

export default camelCase;
