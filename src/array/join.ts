/**
 *
 * @param array
 * @param joiner
 * @returns
 */
const join = <T>(array: T[], joiner: string = ','): string =>
	array.join(joiner);
export default join;
