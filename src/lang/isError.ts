/**
 *
 * @param value The value to check
 * @returns true if passed value is a is error or not
 */
const isNode = (value: any): boolean => value instanceof Error;
export default isNode;
