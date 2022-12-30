/**
 * Checks if value is NaN.
 * @param value The value to check.
 * @returns Returns true if value is NaN, else false.
 */
const isNaN = (value: any): boolean =>
	value instanceof Number || Number.isNaN(value);
export default isNaN;
