/**
 * Converts HTML entities to their corresponding characters.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string containing HTML entities.
 *
 * @return {string} - The string with HTML entities replaced by their corresponding characters.
 *
 * @example
 *
 * unescape('&lt;h1&gt;Hello, World!&lt;/h1&gt;');
 * // => '<h1>Hello, World!</h1>'
 *
 * unescape("It&#39;s a wonderful life.");
 * // => "It's a wonderful life."
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
