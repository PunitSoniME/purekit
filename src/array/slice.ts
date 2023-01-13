/**
 *
 * @param array
 * @param start
 * @param end
 * @returns
 */
const slice = <T>(
	array: T[],
	start: number = 0,
	end: number = array.length
): T[] => array.slice(start, end);
export default slice;
