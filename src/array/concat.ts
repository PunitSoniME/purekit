// interface Concat {
// 	<T>(array: T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], collection3: T | T[], ...restArray: T[]): T[];
// }

/**
 * Creates a new array concatenating array with any additional arrays or values.
 *
 * @template T
 * @param {T[]} array - The array to concatenate.
 * @param {...Array<T>|T} restArray - The values and/or arrays to concatenate.
 * @returns {T[]} - Returns the new concatenated array.
 */
const concat = <T>(array: T[], ...restArray: any[]): T[] => {
	let newArray: T[] = [];
	newArray = newArray.concat(array);

	restArray.forEach(c => {
		newArray = newArray.concat(c);
	});

	return [...newArray];
};
export default concat;
