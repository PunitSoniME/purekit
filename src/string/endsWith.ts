/**
 *
 * @param str
 * @param target
 * @param position
 * @returns
 */
const endsWith = (str: string, target: string, position: number = str.length) =>
	str.endsWith(target, position);

export default endsWith;
