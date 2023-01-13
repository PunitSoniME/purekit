/**
 *
 * @param array
 * @param otherArrays
 * @returns
 */
const zip = (array: any[], ...otherArrays: any[][]): any[][] =>
	array.map((value, idx) => [value, ...otherArrays.map(arr => arr[idx])]);
export default zip;
