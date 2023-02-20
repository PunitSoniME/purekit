import zip from './zip';

/**
 * This function takes an array of arrays and groups the elements of the inner arrays by their index
 * into a new array of arrays.
 *
 * @param {Array.<Array>} array - The array of arrays to unzip
 * @returns {Array.<Array>} - A new array of arrays containing the grouped elements
 *
 * @example
 *
 * unzip([[1, 'a'], [2, 'b'], [3, 'c']]); // [[1, 2, 3], ['a', 'b', 'c']]
 */
//	@ts-ignore
const unzip = ([...array]: any[][]): any[][] => zip(...array);

export default unzip;
