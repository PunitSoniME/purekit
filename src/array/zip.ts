/**
 *
 * @param array
 * @param args
 * @returns
 */
const zip = (array: any[], ...args: any[][]): any[][] =>
	array.map((value, idx) => [value, ...args.map(arr => arr[idx])]);
export default zip;
