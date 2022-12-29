/**
 *
 * @param value The value to check
 * @returns true if passed value is a buffer typed value
 */
const isBuffer = (value: any): boolean => Buffer.isBuffer(value);
export default isBuffer;
