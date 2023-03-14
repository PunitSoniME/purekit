/**
 * Zips together arrays into an array of arrays, with each array element at the same index.
 *
 * @template T
 * @param {T[]} array - The first array to zip.
 * @param {...T[][]} args - The other arrays to zip.
 * @returns {T[][]} - An array of arrays, each containing one element from each input array at the same index.
 * @example
 *
 * zip([1, 2], [10, 20], [100, 200]); // returns [[1, 10, 100], [2, 20, 200]]
 */
const zip = (array: any[], ...args: any[][]): any[][] =>
	array.map((value, idx) => [value, ...args.map(arr => arr[idx])]);
export default zip;
