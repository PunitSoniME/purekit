/**
 *
 * @param array
 * @returns
 */
const over =
	(array: any[]) =>
	(...args: any) =>
		array.map(func => func(...args));
export default over;
