/**
 * The `unescape` function takes a string input and returns a new string with HTML entities replaced by their corresponding characters. It uses an object to map HTML entity strings to their corresponding characters, and a regular expression to match entity strings in the input string. The matched entity string is then replaced by its corresponding character from the object. The function assumes that all entity strings in the object are valid and the regular expression will only match those entity strings.
 * @param str The input string with HTML entities to be replaced by their corresponding characters.
 * @returns A new string with HTML entities replaced by their corresponding characters.
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
