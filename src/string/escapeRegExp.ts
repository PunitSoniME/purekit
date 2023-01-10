/**
 *
 * @param str
 * @returns
 */
const escapeRegExp = (str: string) =>
	str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export default escapeRegExp;
