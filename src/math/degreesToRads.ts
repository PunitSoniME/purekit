/**
 * Converts degrees to radians.
 *
 * @since 1.0.3
 *
 * @param {number} deg - The value in degrees.
 * @returns {number} - The value converted to radians.
 *
 * @example
 * degreesToRads(90);
 * // => 1.5707963267948966
 *
 * degreesToRads(180);
 * // => 3.141592653589793
 */

const degreesToRads = (deg: number): number => (deg * Math.PI) / 180.0;
export default degreesToRads;
