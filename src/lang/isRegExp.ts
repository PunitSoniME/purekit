/**
 * Checks if value is classified as a RegExp object.
 * @param value The value to check
 * @returns Returns true if value is a regexp, else false.
 */
const isRegExp = (value: any): boolean => value instanceof RegExp;
export default isRegExp;
