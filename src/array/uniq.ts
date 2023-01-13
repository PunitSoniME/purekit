/**
 *
 * @param array
 * @returns
 */
const uniq = <T>(array: T[]): T[] => Array.from(new Set(array));
export default uniq;
