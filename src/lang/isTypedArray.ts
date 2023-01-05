/**
 * Checks if value is classified as a typed array.
 * @param value The value to check
 * @returns Returns true if value is a typed array, else false.
 */

const typedArrayPattern =
	/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

const isTypedArray = (value: any): boolean =>
	typedArrayPattern.test(Object.prototype.toString.call(value));
export default isTypedArray;
