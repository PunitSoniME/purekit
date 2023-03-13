import forEach from './forEach';

/**
 * Applies a function to each element in a collection.
 *
 * @template T
 * @param {T} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function to apply to each element.
 * @returns {T} - The original collection.
 *
 * @example
 * const arr = [1, 2, 3];
 * each(arr, n => console.log(n)); // logs 1, 2, 3
 *
 * const obj = { a: 1, b: 2, c: 3 };
 * each(obj, (value, key) => console.log(key, value)); // logs "a 1", "b 2", "c 3"
 */
const each = forEach;
export default each;
