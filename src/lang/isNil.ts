/**
 * Checks if value is null or undefined.
 * @param value The value to check.
 * @returns Returns true if value is nullish, else false.
 */
const isNil = (value: any): boolean => value === null || value === undefined;
export default isNil;
