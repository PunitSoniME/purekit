/**
 * Checks if value is a finite primitive number
 * @param value The value to check
 * @returns ( boolean ) Returns true if value is a finite number, else false.
 */
const isFinite = (value: any): boolean => Number.isFinite(value);
export default isFinite;
