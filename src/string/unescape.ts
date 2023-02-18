/**
 *
 * @param str
 * @returns
 */
const unescape = (str: string): string => {
	const entities = {
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&#39;': "'",
		'&#96;': '`',
		'&#x2F;': '/',
	};

	return str.replace(/&(amp|lt|gt|quot|#(39|96|x2F));/g, match => {
		return (entities as any)[match];
	});
};

export default unescape;
