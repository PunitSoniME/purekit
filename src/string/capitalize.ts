/**
 *
 * @param str
 * @returns
 */
const capitalize = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
export default capitalize;
