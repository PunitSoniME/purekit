/**
 * Returns a new string with first character of string to lower case.
 *
 * @since 1.0.0
 *
 * @param {string} [str = ''] - The string to convert.
 * @returns {string} - Returns a new string with first character of string to lower case.
 *
 * @example
 *
 * lowerFirst('Fred');
 * // => 'fred'
 *
 * lowerFirst('FRED');
 * // => 'fRED'
 */
const lowerFirst = (str: string = ''): string =>
	str.charAt(0).toLowerCase() + str.slice(1);
export default lowerFirst;
