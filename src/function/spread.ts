/**
 * Returns a function that takes an array of arguments and applies it to the given function as separate arguments.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to be called with the spread arguments.
 *
 * @return {Function} The new function that takes an array of arguments and applies it to the given function as separate arguments.
 *
 * @example
 *
 * const sum = (x, y, z) => x + y + z;
 * const spreadSum = spread(sum);
 *
 * spreadSum([1, 2, 3]); // Returns: 6
 *
 */
const spread = (func: Function) => (args: any) => func(...args);
export default spread;
