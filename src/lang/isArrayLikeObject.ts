/**
 *
 * @param value The value to check
 * @returns true if passed array is like an object
 */
const isArrayLikeObject = (value: any): boolean => typeof value === 'object';
export default isArrayLikeObject;
