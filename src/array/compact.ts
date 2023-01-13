/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * @param array The array to compact.
 * @returns Returns the new array of filtered values.
 */
const compact = <T>(array: T[]): T[] => array.filter(x => !!x);
export default compact;
