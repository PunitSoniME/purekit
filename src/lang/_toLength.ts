//  @ts-nocheck
/**
 * Converts value to an integer suitable for use as the length of an array-like object.
 * @param value The value to process.
 * @returns Returns the converted integer.
 */
const toLength = (value: any): number => value?.length;
export default toLength;
