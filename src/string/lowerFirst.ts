/**
 * Returns a new object where the keys and values are swapped.
 *
 * @since 1.0.0
 *
 * @param obj - The object to invert
 *
 * @example
 *
 * invert({ 'a': 1, 'b': 2, 'c': 1 });
 * // => { '1': 'c', '2': 'b' }
 */
const lowerFirst = (str: string = ''): string =>
	str.charAt(0).toLowerCase() + str.slice(1);
export default lowerFirst;
