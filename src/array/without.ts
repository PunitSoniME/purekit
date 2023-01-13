/**
 *
 * @param array
 * @param exception
 * @returns
 */
const without = <T>(array: T[], ...exception: T[]): T[] =>
	array.filter(f => !exception.includes(f));
export default without;
