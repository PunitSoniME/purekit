// interface Concat {
// 	<T>(array: T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], collection3: T | T[], ...restArray: T[]): T[];
// }

/**
 * Concatenates multiple arrays into a single array.
 *
 * @param {Array} array - The first array to concatenate.
 * @param {...Array} restArray - Additional arrays to concatenate.
 * @returns {Array} A new array that is the result of concatenating all of the input arrays.
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
