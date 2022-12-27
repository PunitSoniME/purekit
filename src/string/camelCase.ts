/**
 *
 * @param str
 * @returns
 */
const camelCase = (str: string = '') => {
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
