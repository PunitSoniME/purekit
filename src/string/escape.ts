const map: any = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

/**
 *
 * @param str
 * @returns
 */
const escape = (str: string) => str.replace(/[&<>"']/g, m => map[m]);
export default escape;
