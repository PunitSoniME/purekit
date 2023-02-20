import baseSortedLastIndex from '../helpers/baseSortedLastIndex';

/**
 * This method is like `sortedIndex` except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
 * @param {Array} array - The sorted array to inspect.
 * @param {*} value - The value to evaluate.
 * @returns {number} - Returns the index at which value should be inserted into array.
 */
const sortedLastIndex = <T>(array: T[], value: T): number =>
	baseSortedLastIndex(array, value);
export default sortedLastIndex;
