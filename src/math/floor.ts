import baseMathPrecesion from '../helpers/baseMathPrecesion';

/**
 * Calculates the floor value of a given number up to a specified precision.
 *
 * @since 1.0.0
 *
 * @param {number} value - The number to calculate the floor value of.
 * @param {number} [precision=0] - The number of decimal places to round down to. Defaults to 0.
 * @returns {number} - The floor value of the given number.
 *
 * @example
 *
 * floor(4.7); // returns 4
 * floor(-4.7); // returns -5
 * floor(4060, -2); // returns 4000
 * floor(0.046, 2); // returns 0.04
 */
const floor = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'floor');
};

export default floor;
