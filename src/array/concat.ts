// interface Concat {
// 	<T>(array: T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], ...restArray: T[]): T[];
// 	<T>(array: T[], collection2: T | T[], collection3: T | T[], ...restArray: T[]): T[];
// }

/**
 * Concatenates two or more arrays into a new array
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The first array to concatenate
 * @param {...any[]} restArray - The rest of the arrays to concatenate
 * @returns {T[]} - A new array that contains all the elements from the input arrays
 *
 * @example
 *
 * const arr1 = [1, 2, 3];
 * const arr2 = [4, 5, 6];
 * const arr3 = [7, 8, 9];
 *
 * const result = concat(arr1, arr2, arr3);
 * console.log(result);
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
