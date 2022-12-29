/**
 * Checks if value is a valid array-like length.
 * @param value The value to check
 * @returns ( boolean ) Returns true if value is a valid length, else false.
 */
const isLength = (value: any): boolean =>
	typeof value === 'number' &&
	value > -1 &&
	value % 1 === 0 &&
	value <= Number.MAX_SAFE_INTEGER;
export default isLength;
