/**
 * Returns the result of dividing the `dividend` by the `divisor`.
 *
 * @since 1.0.0
 *
 * @param {number|string} dividend The value to be divided.
 * @param {number|string} divisor The value to divide the `dividend` by.
 *
 * @returns {number|NaN} - The quotient of the division. Returns `NaN` if the `dividend` or `divisor` is not a number.
 *
 * @example
 *
 * divide(8, 2);
 * // => 4
 *
 * divide('8', '2');
 * // => 4
 *
 * divide(1, 0);
 * // => NaN
 *
 * divide('foo', 2);
 * // => NaN
 */

const divide = (
	dividend: number | string,
	divisor: number | string
): number | typeof NaN => Number(dividend) / Number(divisor);
export default divide;
