/**
 * Converts the elements to strings with comma-separated ( default delimiter ) values.
 *
 * @since 1.0.4
 *
 * @param {Array} array - The input array
 * @param {string} [delimiter = ','] - The delimiter to separate
 *
 * @returns {string} - Returns the concated string separated by default or passed delimiter
 *
 * @example
 * arrayToCSV([['a', 'b'], ['c', 'd']]);
 * // => '"a","b"\n"c","d"'
 *
 * arrayToCSV([['a', 'b'], ['c', 'd']], ';');
 * // => '"a";"b"\n"c";"d"'
 */
const arrayToCSV = (array: Array<any>, delimiter: string = ','): string =>
	array.map(v => v.map((x: any) => `"${x}"`).join(delimiter)).join('\n');
export default arrayToCSV;
