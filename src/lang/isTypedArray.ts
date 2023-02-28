/**
 * Checks if a given value is a typed array.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the value is a typed array, else `false`.
 *
 * @example
 * isTypedArray(new Int32Array([1, 2, 3])); // => true
 * isTypedArray([]); // => false
 */
const typedArrayPattern =
	/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

const isTypedArray = (value: any): boolean =>
	typedArrayPattern.test(Object.prototype.toString.call(value));
export default isTypedArray;
