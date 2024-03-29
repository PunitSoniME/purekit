/**
 * Clamps the given number between the given lower and upper bounds.
 *
 * @since 1.0.0
 *
 * @param {number} number - The number to clamp.
 * @param {number} lower - The lower bound for the clamped value.
 * @param {number} upper - The upper bound for the clamped value.
 *
 * @returns {number} - The clamped value.
 *
 * @example
 *
 * clamp(10, 0, 5);
 * // => 5
 *
 * clamp(-10, 0, 5);
 * // => 0
 *
 * clamp(3, 0, 5);
 * // => 3
 *
 * clamp(-10, -5, undefined);
 * // => -5
 */
const clamp = (number: number, lower: number, upper: number): number =>
	upper ? Math.min(Math.max(number, lower), upper) : Math.min(number, lower);

export default clamp;
