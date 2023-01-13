/**
 *
 * @param array
 * @param element
 * @param fromIndex
 * @returns
 */
const lastIndexOf = <T>(
	array: T[],
	element: T,
	fromIndex: number = array.length - 1
): number => array.lastIndexOf(element, fromIndex);
export default lastIndexOf;
