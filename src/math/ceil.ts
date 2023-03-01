import baseMathPrecesion from '../helpers/baseMathPrecesion';

/**
 * Calculates the ceiling value of a given number to the nearest precision value.
 *
 * @since 1.0.0
 *
 * @param {number} value - The number to be rounded.
 * @param {number} [precision=0] - The precision value to round the number to. Default is 0.
 * @returns {number} The rounded ceiling value.
 *
 * @example
 *
 * ceil(4.006);
 * // => 5
 *
 * ceil(6.004, 2);
 * // => 6.01
 *
 * ceil(6040, -2);
 * // => 6100
 */
const ceil = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'ceil');
};

export default ceil;
