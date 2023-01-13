/**
 *
 * @param array
 * @returns
 */
const tail = <T>(array: T[]): T[] => {
	const [, ...rest] = array;
	return rest;
};
export default tail;
