import baseMathPrecesion from '../helpers/baseMathPrecesion';

/**
 * Returns the number rounded to the specified number of decimal places.
 *
 * @since 1.0.0
 *
 * @param {number} value - The number to round.
 * @param {number} [precision=0] - The number of decimal places to round to.
 *
 * @returns {number} - The number rounded to the specified number of decimal places.
 *
 * @example
 *
 * // returns 3.14
 * round(3.14159265359, 2);
 *
 * // returns 3
 * round(3.14159265359);
 */
const round = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'round');
};

export default round;
