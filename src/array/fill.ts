/**
 * Fill an array with a specified value from a start index to an end index.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The input array to be filled.
 * @param {*} value - The value to fill the array with.
 * @param {number} [start=0] - The start index to begin filling the array from.
 * @param {number} [end=array.length] - The end index to stop filling the array at.
 * @returns {T[]} - A new filled array.
 *
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 * const filledArr = fill(arr, 0, 2, 4);
 * console.log(filledArr); // => [1, 2, 0, 0, 5]
 *
 * const arr2 = [1, 2, 3, 4, 5];
 * const filledArr2 = fill(arr2, '*', 1);
 * console.log(filledArr2); // => [1, '*', '*', '*', '*', '*']
 */

const fill = <T>(
	array: T[],
	value: any,
	start: number = 0,
	end: number = array.length
): T[] => {
	array.fill(value, start, end);
	return array;
};

export default fill;
