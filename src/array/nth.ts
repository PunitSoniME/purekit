/**
 *
 * @param array
 * @param index
 * @returns
 */
const nth = <T>(array: T[], index: number = 0): T | undefined =>
	index >= 0 ? array[index] : array[array.length + index];
// array.slice(index, index + 1)[0];

export default nth;
