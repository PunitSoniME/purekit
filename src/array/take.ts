/**
 *
 * @param array
 * @param length
 * @returns
 */
const take = <T>(array: T[], length: number = 1): T[] =>
	[...array].splice(0, length);
export default take;
