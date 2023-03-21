/**
 * Determines whether the given value is an `ArrayBuffer` object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is an `ArrayBuffer` object, `false` otherwise.
 *
 * @example
 * const buffer = new ArrayBuffer(16);
 * isArrayBuffer(buffer); // => true
 *
 * const arr = [1, 2, 3];
 * isArrayBuffer(arr); // => false
 */
const isArrayBuffer = (value: any): boolean => value instanceof ArrayBuffer;
export default isArrayBuffer;
