/**
 * This function creates a new array with unique values from the input `array`,
 * based on the result of applying the `iteratee` function to each element. The order of
 * elements in the returned array is based on the order of the first occurrence of each value.
 *
 * @template T
 * @param {T[]} array - The input array to process.
 * @param {Function} iteratee - The function invoked per iteration.
 * @returns {T[]} - A new array of unique values.
 *
 * @example
 * const array = [{ x: 1 }, { x: 2 }, { x: 1 }];
 * const result = sortedUniqBy(array, o => o.x);
 * console.log(result); // Output: [{ x: 1 }, { x: 2 }]
 */
const sortedUniqBy = <T>(array: T[], iteratee: Function): T[] => {
	let mappedValues = new Map();

	array.forEach(element => {
		const updatedElement = iteratee(element);
		if (updatedElement && !mappedValues.has(updatedElement)) {
			mappedValues.set(updatedElement, element);
		}
	});

	return Array.from(new Set([...mappedValues.values()]));
};
export default sortedUniqBy;
