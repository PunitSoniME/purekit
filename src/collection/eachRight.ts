import forEachRight from './forEachRight';

/**
 * Applies an iteratee function to each element of an array-like object, starting from the end of the collection.
 *
 * @template T
 * @param {T} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 * @returns {T} - Returns the original collection.
 *
 * @example
 *
 * const arr = [1, 2, 3];
 *
 * eachRight(arr, (value, index) => {
 *   console.log(`Value: ${value} Index: ${index}`);
 * });
 * // Value: 3 Index: 2
 * // Value: 2 Index: 1
 * // Value: 1 Index: 0
 *
 * const obj = { a: 1, b: 2, c: 3 };
 *
 * eachRight(obj, (value, key) => {
 *   console.log(`Key: ${key} Value: ${value}`);
 * });
 * // Key: c Value: 3
 * // Key: b Value: 2
 * // Key: a Value: 1
 */
const eachRight = forEachRight;
export default eachRight;
