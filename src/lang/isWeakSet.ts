/**
 * Checks if value is classified as a weak set object.
 * @param value The value to check
 * @returns Returns true if value is a weak set, else false
 */
const isWeakSet = (value: any): boolean => value instanceof WeakSet;
export default isWeakSet;
