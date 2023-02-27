/**
 * Checks if two values are equivalent, based on the `Object.is` method.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to compare.
 * @param {*} other - The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 *
 * @example
 *
 * eq(NaN, NaN); // => true
 *
 * eq(1, 1); // => true
 * eq(1, '1'); // => false
 * eq({}, {}); // => false
 * eq([], []); // => false
 */

const eq = (value: any, other: any): boolean =>
	value === other || (value !== value && other !== other);
export default eq;
