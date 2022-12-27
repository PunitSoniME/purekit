/**
 *
 * @param str
 * @returns
 */
const upperFirst = (str: string = ''): string =>
	str.charAt(0).toUpperCase() + str.slice(1);
export default upperFirst;
