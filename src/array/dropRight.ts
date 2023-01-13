/**
 *
 * @param array
 * @param n
 * @returns
 */
const dropRight = <T>(array: T[], n: number = 1) =>
	array.slice(0, -n || array.length);
export default dropRight;
