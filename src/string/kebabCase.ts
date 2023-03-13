/**
 * Converts a string to kebab case.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to convert.
 *
 * @returns {string} - The kebab case string.
 *
 * @example
 * const str = 'This is a Test String';
 *
 * const kebabStr = kebabCase(str); // 'this-is-a-test-string'
 */
const kebabCase = (str: string = ''): string => {
	let out = str
		.replace(/[-._\s]+/g, '-')
		.replace(/[A-Z0-9]/, '-$&')
		.replace(/[-]{2,}/, '');

	if (out[0] === '-') {
		out = out.slice(1);
	}
	if (out[out.length - 1] === '-') {
		out = out.slice(0, -1);
	}
	return out.toLowerCase();
};

export default kebabCase;
