/**
 * Checks if a value is a safe integer, which is a number between -(2^53 - 1) and 2^53 - 1.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a safe integer, else `false`.
 *
 * @example
 *
 * isSafeInteger(42);
 * // => true
 *
 * isSafeInteger(Number.MAX_SAFE_INTEGER);
 * // => true
 *
 * isSafeInteger(Number.MIN_SAFE_INTEGER);
 * // => true
 *
 * isSafeInteger('42');
 * // => false
 *
 * isSafeInteger(3.14);
 * // => false
 *
 * isSafeInteger(Number.POSITIVE_INFINITY);
 * // => false
 */
const isSafeInteger = (value: any): boolean => Number.isSafeInteger(value);
export default isSafeInteger;
