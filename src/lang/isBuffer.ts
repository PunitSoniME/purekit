/**
 * Determines whether the given value is a Node.js Buffer object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is a Node.js Buffer object, `false` otherwise.
 *
 * @example
 * const buf = Buffer.from('hello', 'utf8');
 * isBuffer(buf); // => true
 *
 * const arr = [1, 2, 3];
 * isBuffer(arr); // => false
 */
const isBuffer = (value: any): boolean => Buffer.isBuffer(value);
export default isBuffer;
