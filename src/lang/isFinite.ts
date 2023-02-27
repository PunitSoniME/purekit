/**
 * Checks if a value is a finite number.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 *
 * @example
 *
 * isFinite(3); // true
 * isFinite(Number.POSITIVE_INFINITY); // false
 * isFinite('123'); // false
 */
const isFinite = (value: any): boolean => Number.isFinite(value);
export default isFinite;
