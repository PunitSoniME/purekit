/**
 *
 * @param str
 * @returns
 */
const lowerFirst = (str: string = ''): string =>
	str.charAt(0).toLowerCase() + str.slice(1);
export default lowerFirst;
