/**
 * Checks if value is classified as a weak map object.
 * @param value The value to check
 * @returns Returns true if value is a weak map, else false
 */
const isWeakMap = (value: any): boolean => value instanceof WeakMap;
export default isWeakMap;
