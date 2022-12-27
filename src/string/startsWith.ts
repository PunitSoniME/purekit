/**
 *
 * @param str
 * @param target
 * @param position
 * @returns
 */
const startsWith = (
	str: string = '',
	target: string = '',
	position: number = 0
): boolean => str.startsWith(target, position);

export default startsWith;
