/**
 * Converts a value to an integer.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to convert.
 * @returns {number} - The converted integer.
 *
 * @example
 *
 * toInteger(3.2); // 3
 * toInteger(-3.8); // -3
 * toInteger('3.2'); // 3
 * toInteger('-3.8'); // -3
 * toInteger('abc'); // 0
 * toInteger(true); // 1
 * toInteger(false); // 0
 * toInteger(null); // 0
 * toInteger(undefined); // 0
 */
const toInteger = (value: any): number => parseInt(value);
export default toInteger;
