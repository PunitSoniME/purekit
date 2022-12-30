/**
 * Checks if value is classified as a typed array.
 * @param value The value to check
 * @returns Returns true if value is a typed array, else false.
 */
const isTypedArray = (value: any): boolean =>
	[
		Int8Array,
		Uint8Array,
		Uint8ClampedArray,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array,
		BigInt64Array,
		BigUint64Array,
	].indexOf(value.constructor) > -1;
export default isTypedArray;
