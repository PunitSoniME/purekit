/**
 *
 * @param value The value to check
 * @returns true if passed array is like an Array
 */
const isArrayLike = (value: any): boolean => {
	try {
		return value.length >= 0;
	} catch {
		return false;
	}
};
export default isArrayLike;
