/**
 *
 * @param str
 * @returns
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
