const map: any = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

/**
 * Escapes special characters in a string to prevent cross-site scripting (XSS) attacks.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to escape.
 *
 * @returns {string} - The escaped string.
 *
 * @example
 * const str = 'This is a <script>alert("XSS");</script> attack.';
 *
 * const escapedStr = escape(str); // 'This is a &lt;script&gt;alert(&quot;XSS&quot;);&lt;/script&gt; attack.'
 */
const escape = (str: string): string => str.replace(/[&<>"']/g, m => map[m]);
export default escape;
